Text2Column = Text2Column ? Text2Column : {};
Text2Column.attachEvents = function (w) {
  const doc = w.document;

  // Handlers for column regions
  ['keyup', 'paste'].forEach(eType => {
    doc.getElementById('regions').addEventListener(eType, function (e) {
      const value = e.target.value;
      const columns = [];

      for (let region of value.split(';')) {
        const [rangeTokens, name] = region.split(':');
        const [start, end] = rangeTokens.split('-').map(x => parseInt(x));
        columns.push({ name, start, end });
      }

      Text2Column.store.save('regions', columns);
      Text2Column.calculateAndShowResults(w);
      doc.getElementById('log').textContent = `${columns.length} ${columns.length === 1 ? 'column' : 'columns'} specified.`;
    });
  });

  // Handlers for data
  ['keyup', 'paste'].forEach(eType => {
    doc.getElementById('data').addEventListener(eType, function (e) {
      // if (/^[a-z0-9 ]$/i.test(e.key)) {
      //   console.log(e.target.value);
      // }
      Text2Column.store.save('data', e.target.value);
      Text2Column.calculateAndShowResults(w);
    });
  });
};
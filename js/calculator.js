Text2Column = Text2Column ? Text2Column : {};
Text2Column.calculateAndShowResults = function (w) {
  setTimeout(() => {
    console.log('Calculating.');
    const doc = w.document;
    doc.getElementById('output').innerHtml = '';

    const table = doc.getElementById('output');
    const data = Text2Column.store.recall('data');
    const regions = Text2Column.store.recall('regions');
    
    if (!regions || !data) {
      return;
    }
    
    const newline = data.indexOf('\r\n') > 0 ? '\r\n' : '\n';
    const processedLines = [];

    for (let line of data.split(newline)) {
      const tokenizedLine = [];
      for (let region of regions) {
        const start = region.start - 1;
        const end = region.end;
        
        tokenizedLine.push(line.substring(start, end));
      }
      processedLines.push(tokenizedLine);
    }
    debugger;
  }, 0);
};
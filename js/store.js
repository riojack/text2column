Text2Column = Text2Column ? Text2Column : {};
Text2Column.store = (function () {
  const hash = new Map();

  return {
    save: (key, value) => {
      hash.set(key, value);
    },
    recall: (key) => hash.get(key)
  };
})();
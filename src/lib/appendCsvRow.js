const appendCsvRow = (csvString, rowArray = []) => {
  rowArray.forEach((column) => {
    const value = column || "";
    csvString = `${csvString}${value}, `;
  });

  return csvString + "\n";
};

module.exports = appendCsvRow;

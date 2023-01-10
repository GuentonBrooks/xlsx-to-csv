const appendCsvRow = require("./appendCsvRow");
const isFilledRow = require("./isFilledRow");

const buildCsvFromArray = (workbookArray = []) => {
  // Initialize Empty CSV String
  let csvString = "";

  // Loop Through Each Row of the Workbook
  workbookArray.forEach((rowArray) => {
    // Check if the row contains data then append to the csv String
    if (isFilledRow(rowArray)) {
      csvString = appendCsvRow(csvString, rowArray);
    }
  });

  // return the full CSV String
  return csvString;
};

module.exports = buildCsvFromArray;

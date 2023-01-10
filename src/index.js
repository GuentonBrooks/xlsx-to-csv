const path = require("node:path");
const XlsxPopulate = require("xlsx-populate");
const buildCsvFromArray = require("./lib/buildCsvFromArray");
const isFilledRow = require("./lib/isFilledRow");
const writeCsvFile = require("./lib/writeCsvFile");

// Establish Input and Output Files
const excelFile = path.join(__dirname, "../PCNPay.xlsx");
const csvFile = path.join(__dirname, "../export.csv");

console.log(`Working on Input File: ${excelFile}`);

// Load an existing workbook
XlsxPopulate.fromFileAsync(excelFile)
  .then((workbook) => {
    // Parse the Entire First Sheet into an Array
    const workbookArray = workbook.sheet("Sheet1").usedRange().value();

    // Build the CSV file
    const csvString = buildCsvFromArray(workbookArray);

    // Log the value.
    console.log(csvString);

    // Write The CSV file to Disk
    writeCsvFile(csvFile, csvString)
      .then(() => console.log(`CSV file written to ${csvFile}`))
      .catch((e) => {
        throw e;
      });
  })
  .catch((e) => {
    console.error(e);
  });

const fsPromise = require("fs").promises;

const writeCsvFile = (filePath = "", csvString = "") =>
  fsPromise.writeFile(filePath, csvString).catch((e) => {
    throw e;
  });

module.exports = writeCsvFile;

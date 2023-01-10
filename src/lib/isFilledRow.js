const isFilledRow = (rowArray = []) => {
  let hasValues = false;
  rowArray.forEach((column) => {
    if (column) return (hasValues = true);
  });

  return hasValues;
};

module.exports = isFilledRow;

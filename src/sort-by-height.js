const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = [];
  const sort = [...arr].sort((a, b) => a - b).filter((el) => el !== -1);
  arr.forEach((el) =>
    el === -1 ? result.push(el) : result.push(sort.shift())
  );
  return result;
}

module.exports = {
  sortByHeight,
};

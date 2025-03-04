const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 * Дана матрица - прямоугольная матрица целых чисел,
 * просто сложите все значения, которые не стоят ниже "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const colmn0 = new Set();
  let sum = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[0].length; j += 1) {
      !colmn0.has(j) ? (sum += matrix[i][j]) : null;
      matrix[i][j] === 0 ? colmn0.add(j) : null;
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};

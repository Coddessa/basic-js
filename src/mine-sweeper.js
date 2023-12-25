const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 * В популярной игре Minesweeper у вас есть доска с некоторыми минами, а те клетки
 * которые не содержат мины, имеют число, обозначающее общее количество мин
 * в соседних клетках. Начиная с некоторого расположения мин.
 * мы хотим создать установку для игры Minesweeper.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/* matrix */) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  minesweeper,
};

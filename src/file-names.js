const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *Имеется список файлов, поскольку два файла не могут иметь одинаковые имена,
 * тот, который придет позже, будет иметь суффикс (k),
 * где k - наименьшее целое число, такое, что найденное имя еще не используется.
 *
 * Возвращает массив имен, которые будут присвоены файлам.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(/* names */) {
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  renameFiles,
};

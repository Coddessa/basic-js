const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 * Если задан адрес электронной почты, верните его домен.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const domainPart = email.split("@");
  const domain = domainPart[domainPart.length - 1];
  return domain;
}

module.exports = {
  getEmailDomain,
};

const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15; // начальная активность No
const HALF_LIFE_PERIOD = 5730; // период полураспада Tpp (углерода С14)

/**
 * Determine the age of archeological find by using
 * Определите возраст археологической находки с помощью
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity - переданная активность Nt
 * от 0 до 15 (No) плавающая точка
 * string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * Age = - (Tpp*ln(Nt/No))/ln 2 или 0.693
 * Age = Tpp/0.693 *  ln (Nt/No)
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const currentActivityNum = parseFloat(sampleActivity);
  if (isNaN(currentActivityNum) || typeof sampleActivity !== "string") {
    return false;
  } else if (currentActivityNum <= 0 || currentActivityNum > MODERN_ACTIVITY) {
    return false;
  }

  const age =
    -(HALF_LIFE_PERIOD / 0.693) *
    Math.log(currentActivityNum / MODERN_ACTIVITY);

  return Math.ceil(age);
}

module.exports = {
  dateSample,
};

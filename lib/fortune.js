const fortunes = ["quote1", "quote2", "quote3", "quote4", "quote5"];

exports.getFortune = () => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  return fortunes[idx];
};

module.exports = fortunes;

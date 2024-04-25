const volumeBalok = (p, l, t) => {
  return p * l * t;
};

const luasPermukaanBalok = (p, l, t) => {
  return 2 * (p * l + p * t + l * t);
};

module.exports = { volumeBalok, luasPermukaanBalok };

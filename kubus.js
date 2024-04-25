const kubus = (volume, luasPermukaan) => {
  const vol = volume * volume * volume;
  const luas = luasPermukaan * luasPermukaan * 6;

  return { vol, luas };
};

module.exports = kubus;

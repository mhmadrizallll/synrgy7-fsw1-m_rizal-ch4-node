const luasPermukaanPrisma = (alas, tinggiAlas, tinggiPrisma) => {
  const luasAlas = 0.5 * alas * tinggiAlas;
  const panjangSisi = Math.sqrt(
    Math.pow(tinggiPrisma, 2) + Math.pow(0.5 * alas, 2)
  );

  const luasSelimut = 3 * 0.5 * alas * panjangSisi;
  const luasPermukaan = luasAlas + luasSelimut;

  return luasPermukaan;
};

const volumePrisma = (alas, tinggiAlas, tinggiPrisma) => {
  const luasAlas = 0.5 * alas * tinggiAlas;
  const volume = luasAlas * tinggiPrisma;

  return volume;
};

module.exports = { luasPermukaanPrisma, volumePrisma };

const kubus = require("./kubus.js");
const { volumeBalok, luasPermukaanBalok } = require("./balok.js");
const { luasPermukaanPrisma, volumePrisma } = require("./prisma.js");
const { writeData, readData, getData, getDetail } = require("./people.js");
const fs = require("fs");

console.log(kubus(8, 12));
console.log("volume balok = ", volumeBalok(8, 12, 10));
console.log("luas permukaan balok = ", luasPermukaanBalok(8, 12, 10));
console.log("volume prisma = ", volumePrisma(8, 12, 10));
console.log("Luas permukaan prisma = ", luasPermukaanPrisma(8, 12, 10));

fs.writeFileSync(
  "./result.txt",
  `Luas permukaan balok = ${luasPermukaanBalok(
    8,
    12,
    10
  )}, \nVolume balok = ${volumeBalok(8, 12, 10)}`
);

const data = fs.readFileSync("./result.txt", "utf8");
console.log(data);

writeData();
readData();
getData();
getDetail(3);

const fs = require("fs");

const people = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const writeData = () => {
  fs.writeFile("./people.txt", JSON.stringify(people), "utf8", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

const readData = () => {
  fs.readFile("./people.txt", "utf8", (err, data) => {
    if (err) throw err;
    const people = JSON.parse(data);
    console.log(people);
  });
};

const getData = () => {
  fs.readFile("./people.txt", "utf8", (err, data) => {
    if (err) throw err;
    // ambil nama dari data berbentuk array of string
    const people = JSON.parse(data);
    const result = people.map((person) => person.name);
    console.log(result);
  });
};

const getDetail = (id) => {
  fs.readFile("./people.txt", "utf8", (err, data) => {
    if (err) throw err;

    const people = JSON.parse(data);
    people.forEach((person) => {
      if (person.id === id) {
        console.log(person);
      }
    });
  });
};

module.exports = { writeData, readData, getData, getDetail };

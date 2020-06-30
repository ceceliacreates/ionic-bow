const traits = require("../src/data/traits.json");
const users = require("../src/data/users.json");
const fs = require("fs");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function updateUsers() {
  users.forEach((user) => {
    const shuffledTraits = shuffle(traits);
    user.traits = [shuffledTraits[0], shuffledTraits[1], shuffledTraits[2]];
  });

  console.log(users);
}

async function saveToFile() {
  fs.writeFile("../src/data/users.json", JSON.stringify(users), (err) => {
    console.log("Traits added and file saved");
  });
}

updateUsers().then(() => saveToFile());

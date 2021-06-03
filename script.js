const players = {
  player1: {
    name: "Scorpion",
    hp: 100,
    img: "string",
    weapon: ["Крючек", "Огонь", "Перещение"],
    attack: function () {
      console.log(this.name + " " + "Fight ...");
    },
  },
  player2: {
    name: "Subzero",
    hp: 200,
    img: "string",
    weapon: ["Лед", "Вода", "Предметы"],
    attack: function () {
      console.log(this.name + " " + "Fight ...");
    },
  },
};

players.player1.attack();
players.player2.attack();

const $root = document.querySelector(".root");

function creatPlayer() {
  // обявление переменных
  let div = document.createElement("div");
  let progressbar = document.createElement("div");
  let character = document.createElement("div");
  let life = document.createElement("div");
  let name = document.createElement("div");
  let img = document.createElement("img");
  // добавление классов
  div.classList.add("player1");
  progressbar.classList.add("progressbar");
  character.classList.add("character");
  life.classList.add("life");
  name.classList.add("name");
  img.classList.add("img");
  // добавление свойств
  img.src = "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif";
  life.style.width = "100%";
  life.innerText = players.player1.name;
  // вставление внутрь элемента
  div.appendChild(character);
  character.appendChild(img);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  div.appendChild(progressbar);
  $root.appendChild(div);
}

creatPlayer();

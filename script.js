const players = {
  player1: {
    name: "Scorpion",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["Крючек", "Огонь", "Перещение"],
    attack: function () {
      console.log(this.name + " " + "Fight ...");
    },
  },
  player2: {
    name: "Subzero",
    hp: 60,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ["Лед", "Вода", "Предметы"],
    attack: function () {
      console.log(this.name + " " + "Fight ...");
    },
  },
};

players.player1.attack();
players.player2.attack();

const $arenas = document.querySelector(".arenas");

function creatPlayer(player, playNmae) {
  console.log(player);
  // обявление переменных
  let div = document.createElement("div");
  let progressbar = document.createElement("div");
  let character = document.createElement("div");
  let life = document.createElement("div");
  let name = document.createElement("div");
  let img = document.createElement("img");
  // добавление классов
  div.classList.add(playNmae);
  progressbar.classList.add("progressbar");
  character.classList.add("character");
  life.classList.add("life");
  name.classList.add("name");
  img.classList.add("img");
  // добавление свойств
  img.src = player.img;
  life.style.width = player.hp + "%";
  life.innerText = player.name;
  // вставление внутрь элемента
  div.appendChild(character);
  character.appendChild(img);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  div.appendChild(progressbar);
  $arenas.appendChild(div);
}

creatPlayer(players.player1, "player1");
creatPlayer(players.player2, "player2");

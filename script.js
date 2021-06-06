const $arenas = document.querySelector(".arenas");
const button = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Крючек", "Огонь", "Перещение"],
  attack: function () {
    console.log(this.name + " " + "Fight ...");
  },
};
const player2 = {
  player: 2,
  name: "Subzero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Лед", "Вода", "Предметы"],
  attack: function () {
    console.log(this.name + " " + "Fight ...");
  },
};

player1.attack();
player2.attack();

function createClass(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }

  return $tag;
}

function creatPlayer(player) {
  console.log(player.hp);
  // обявление переменных
  const div = createClass("div", "player" + player.player);
  const progressbar = createClass("div", "progressbar");
  const character = createClass("div", "character");
  const life = createClass("div", "life");
  const name = createClass("div", "name");
  const img = createClass("img");
  // добавление свойств
  img.src = player.img;
  life.style.width = player.hp + "%";
  name.innerText = player.name;
  // вставление внутрь элемента
  div.appendChild(character);
  character.appendChild(img);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  div.appendChild(progressbar);
  return div;
}

function changeHP(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + "  .life"
  );
  const random = Math.ceil(Math.random() * 20);
  player.hp -= random;
  $playerLife.style.width = player.hp + "%";

  if (player.hp <= 0) {
    player.hp = 0;
    checkHP(player1, player2);
  }
}

function checkHP(first, second) {
  if (first.hp > second.hp) {
    $arenas.appendChild(playerLose(first.name));
  } else if (first.hp < second.hp) {
    $arenas.appendChild(playerLose(second.name));
  } else if (first.hp && second.hp <= 0) {
    $arenas.appendChild(playerDraw());
  }
}

button.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);
});

function playerLose(name) {
  const loseTitle = createClass("div", "loseTitle");
  loseTitle.innerText = name + " Wins";
  button.disabled = true;
  return loseTitle;
}
function playerDraw() {
  const DrawTitle = createClass("div", "loseTitle");
  DrawTitle.innerText = " Draw";
  button.disabled = true;
  return DrawTitle;
}

$arenas.appendChild(creatPlayer(player1));
$arenas.appendChild(creatPlayer(player2));

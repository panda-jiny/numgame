const result = document.querySelector("#result");
const user = document.querySelector("#user");
const playBtn = document.querySelector("#play");
const resetBtn = document.querySelector("#reset");
const chance = document.querySelector("#chance");
const imgBox = document.querySelector("img");
const counter = document.querySelector("#chance span");
const lifeLeft = document.querySelector(".lifeLeft");
const life = document.querySelector(".life");
const userDown = document.querySelector(".userDown");
const userUp = document.querySelector(".userUp");
counterUser = 5;
let history = [];
let historyUp = [];
let historyDown = [];

// 무작위 수 생성
function randomNum() {
  comNum = Math.floor(Math.random() * 100 + 1);
  console.log(comNum);
}
randomNum();

function play() {
  let userNum = user.value;
  // console.log(userNum);

  if (userNum < 1 || userNum > 100) {
    alert("적당히 해라");
    user.value = "";
    return;
  } else if (history.includes(userNum)) {
    result.innerHTML = `<span class="word" data-word="FOCUS!" style="--word-index: 0;"><span class="char" data-char="F" style="--char-index: 0;">F</span><span class="char" data-char="O" style="--char-index: 1;">O</span></span><span class="char" data-char="C" style="--char-index: 2;">C</span></span><span class="char" data-char="U" style="--char-index: 3;">U</span><span class="char" data-char="S" style="--char-index: 4;">S</span><span class="char" data-char="!" style="--char-index: 5;">!</span></span>`;
    return;
  } else if (comNum > userNum) {
    result.innerHTML = `<span class="word" data-word="UP" style="--word-index: 0;"><span class="char" data-char="U" style="--char-index: 0;">U</span><span class="char" data-char="P" style="--char-index: 1;">P</span></span>`;
    imgBox.src = "img/up.jpg";
    historyDown.push(userNum);
  } else if (comNum < userNum) {
    result.innerHTML = `<span class="word" data-word="DOWN" style="--word-index: 0;"><span class="char" data-char="D" style="--char-index: 0;">D</span><span class="char" data-char="O" style="--char-index: 1;">O</span></span><span class="char" data-char="W" style="--char-index: 2;">W</span></span><span class="char" data-char="N" style="--char-index: 3;">N</span></span>`;
    imgBox.src = "img/down.gif";
    historyUp.push(userNum);
  } else if (comNum == userNum) {
    result.innerHTML = `<span class="word" data-word="BINGO!" style="--word-index: 0;"><span class="char" data-char="B" style="--char-index: 0;">B</span><span class="char" data-char="I" style="--char-index: 1;">I</span></span><span class="char" data-char="N" style="--char-index: 2;">N</span></span><span class="char" data-char="G" style="--char-index: 3;">G</span><span class="char" data-char="O" style="--char-index: 4;">O</span><span class="char" data-char="!" style="--char-index: 5;">!</span></span>`;
    imgBox.src = "img/img.gif";
    playBtn.disabled = true;
    user.disabled = true;
    return;
  }
  history.push(userNum);
  userDown.textContent = historyDown;
  userUp.textContent = historyUp;

  user.addEventListener("focus", () => {
    user.value = "";
  });
  counterUser--;
  // console.log(counterUser);
  counter.textContent = `HP : ${counterUser} / 5`;
  // chance.textContent = `남은찬스 : ${counterUser}번`;
  if (counterUser == 5) {
    lifeLeft.style.width = "100%";
  }
  if (counterUser == 4) {
    lifeLeft.style.width = "70%";
  }
  if (counterUser == 3) {
    lifeLeft.style.width = "50%";
  }
  if (counterUser == 2) {
    lifeLeft.style.width = "30%";
  }
  if (counterUser == 1) {
    lifeLeft.style.width = "10%";
  }
  if (counterUser == 0) {
    lifeLeft.style.width = "0%";
    life.style.backgroundColor = "gray";
    counter.textContent = "GAME OVER";
    imgBox.src = "img/fail.jpeg";
    result.innerHTML = `<span class="word" data-word="LOSER" style="--word-index: 0;"><span class="char" data-char="L" style="--char-index: 0;">L</span><span class="char" data-char="O" style="--char-index: 1;">O</span></span><span class="char" data-char="S" style="--char-index: 2;">S</span></span><span class="char" data-char="E" style="--char-index: 3;">E</span><span class="char" data-char="R" style="--char-index: 4;">R</span></span>`;
    playBtn.disabled = true;
    user.disabled = true;
  }
}
playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
function reset() {
  counterUser = 5;
  counter.textContent = `HP : ${counterUser} / 5`;
  imgBox.src = "img/lets-do-this.gif";
  result.innerHTML = `<span class="word" data-word="LET'S" style="--word-index: 0;"><span class="char" data-char="L" style="--char-index: 0;">L</span><span class="char" data-char="E" style="--char-index: 1;">E</span><span class="char" data-char="T" style="--char-index: 2;">T</span><span class="char" data-char="'" style="--char-index: 3;">'</span><span class="char" data-char="S" style="--char-index: 4;">S</span></span><span class="whitespace"> </span><span class="word" data-word="DO" style="--word-index: 1;"><span class="char" data-char="D" style="--char-index: 5;">D</span><span class="char" data-char="O" style="--char-index: 6;">O</span></span><span class="whitespace"> </span><span class="word" data-word="THIS" style="--word-index: 2;"><span class="char" data-char="T" style="--char-index: 7;">T</span><span class="char" data-char="H" style="--char-index: 8;">H</span><span class="char" data-char="I" style="--char-index: 9;">I</span><span class="char" data-char="S" style="--char-index: 10;">S</span></span>`;
  history.length = 0;
  historyUp.length = 0;
  historyDown.length = 0;
  userDown.textContent = "";
  userUp.textContent = "";
  lifeLeft.style.width = "100%";
  playBtn.disabled = false;
  user.disabled = false;
  user.value = "";
  randomNum();
}

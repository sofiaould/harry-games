/** @format */
let harry;
let mechants;
let gameover = false;
let points;
const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
let endOfTheGame = document.querySelector("#gameOver");
let buttonStart = document.querySelector("button");
var audio = document.querySelector("#audio");
function draw() {
  ctx.clearRect(0, 0, W, H);
  //
  // Draw Harry
  //
  harry.draw();
  //draw score
  // Draw Vilains
  //
  if (frames % 150 === 0) {
    let name = randomVil();
    var vilain = new Vilains(name);
    mechants.push(vilain);
  }
  mechants.forEach((el) => {
    el.y += 1;
    el.draw();
  });
  for (var i = 0; i < mechants.length; i++) {
    mechants[i].x -= 6;
  }
  //
  for (vilain of mechants) {
    if (harry.getPoints(vilain)) {
      console.log(points);
    }
  }
  //Points
  ctx.font = "16px arial";
  ctx.fillStyle = "#DFAF2C";
  ctx.fillText(`Score: ${points}`, W - 130, 50);
}
document.onkeydown = function (e) {
  if (!harry) return;
  switch (e.keyCode) {
    case 38: // up arrow
      harry.moveUp();
      break;
    case 40: // down arrow
      harry.moveDown();
      break;
    case 37: // left arrow
      harry.moveLeft();
      break;
    case 39: // right arrow
      harry.moveRight();
      break;
  }
};
let raf;
let frames = 0;
function animLoop() {
  // executee toutes les 16ms
  frames++;
  draw();
  checkGameOver();
  if (!gameover) {
    requestAnimationFrame(animLoop);
  } else {
    endOfTheGame.style.display = "block";
    document.getElementById("start-button").onclick = function () {
      ctx.clearRect(0, 0, W, H);
      startGame();
    };
  }
}
function startGame() {
  endOfTheGame.style.display = "none";
  if (raf) {
    cancelAnimationFrame(raf);
  }
  //
  mechants = [];
  gameover = false;
  harry = new Component(50, 100, "./images/harry.png", 20, 200);
  //obstacles = [];
  points = 0;
  audio.volume = 0.2;
  audio.play();
  requestAnimationFrame(animLoop);
  //console.log("reussi");
}
//startGame();
function checkGameOver() {
  const crashed = mechants.some(function (vilain) {
    return harry.crashWith(vilain);
  });
  if (crashed) {
    gameover = true;
    document.getElementById("start").style.display = "none";
  }
}
document.getElementById("start").onclick = function () {
  startGame();
};

/** @format */

let harry;
let mechants = [];
let gameover = false;
let points;
const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
/*var myAudio = document.createElement("audio");
myAudio.src = "HarryPottermusic.mp3";
myAudio.play();*/

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
  }
}
/*document.addEventListener("keyup", (e) => {
  //ralentir harry
  harry.speedX = 0;
  harry.speedY = 0;
});*/
function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  //
  harry = new Component(50, 100, "./images/harry.png", 20, 200);
  //obstacles = [];
  points = 0;
  requestAnimationFrame(animLoop);
  //console.log("reussi");
}
startGame();
function checkGameOver() {
  const crashed = mechants.some(function (vilain) {
    return harry.crashWith(vilain);
  });

  if (crashed) {
    gameover = true;
    let endOfTheGame = setTimeout(startGame(), 1000);
    clearTimeout(endOfTheGame);
    //stopGame();
  }
}

/*function stopGame() {
  //return clearInterval(this.interval);
  //console.log("you made it");
  let endOfTheGame = setTimeout(startGame(), 1000);
  if (crashed) {
    clearTimeout(endOfTheGame);
  }
}*/

/** @format */

let harry;
let mechants = [];
let gameover;
let points;
const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  ctx.clearRect(0, 0, W, H);
  //
  // Draw Harry
  //
  harry.draw();
  harry.newPos();
  //
  // Draw Vilains
  //
  if (frames % 150 === 0) {
    let name = randomVil();
    var vilain = new Vilains(name);
    mechants.push(vilain);
  }
  mechants.forEach((el) => {
    el.y += 5;
    el.draw();
  });

  for (var i = 0; i < mechants.length; i++) {
    mechants[i].x -= 5;
  }
}

document.onkeydown = function (e) {
  if (!harry) return;
  switch (e.keyCode) {
    case 38: // up arrow
      harry.speedY -= 1;
      break;
    case 40: // down arrow
      harry.speedY += 1;
      break;
    case 37: // left arrow
      harry.speedX -= 1;
      break;
    case 39: // right arrow
      harry.speedX += 1;
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
document.addEventListener("keyup", (e) => {
  //ralentir harry
  harry.speedX = 0;
  harry.speedY = 0;
});
function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  //
  harry = new Component(180, 180, "images/harrypotter.jpg", 0, 110);
  //obstacles = [];
  requestAnimationFrame(animLoop);
  console.log("reussi");
}
startGame();
/*for (el of mechants) {
    if (el.hits(harry)) {
      console.log('crashed');
      gameover = true;
    }
  }};*/
function checkGameOver() {
  const crashed = mechants.some(function (vilain) {
    return harry.crashWith(vilain);
  });

  if (crashed) {
    stopGame();
    console.log("crashed");
  }
}

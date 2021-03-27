let harry;
let mechants= [];
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
		let name = randomVillains()
        var vilain = new Vilains (name)
        mechants.push(vilain)
	}
	mechants.forEach((el) => {
		//el.y += 5;
		el.draw();
	});
	//
	// Iteration #5: collisions
	//
	// obstacles.forEach((obstacle) => {
	// 	if (obstacle.hits(car)) {
	// 		console.log("crashed");
	// 		gameover = true;
	// 	}
	// });
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
	frames++;
	draw();
	if (!gameover) {
		requestAnimationFrame(animLoop);
	}
}
function startGame() {
	if (raf) {
		cancelAnimationFrame(raf);
	}
	//
	harry = new Component(180, 180, "images/harrypotter.jpg", 0, 110);
	//obstacles = [];
	requestAnimationFrame(animLoop);
}
startGame();
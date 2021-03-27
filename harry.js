
let vilains= []
const myGameArea = {
  canvas: document.createElement('canvas'), // creer le canvas 
  // context: {}
  frames:0, // frame 
  start: function () { // fonction demarrer 
    this.canvas.width = 500; // propriete canvas
    this.canvas.height = 300;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]); // insertion ds le body
    // call updateGameArea() every 20 milliseconds
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function (){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};
function updateGameArea() { // faire fonctionner le jeu 
  myGameArea.clear();
  harry.draw();
  //harry.update();
  harry.newPos();

}
myGameArea.start()



class Component {
  constructor(width, height, picString, x, y) {
    const img = document.createElement('img'); // <img>
    this.img = img // tableau images mechants
    this.img.onload = () => {
      console.log('image chargee') // ecrire des console si jamais tu es pas sure que ca marche
      this.draw()
    }
    this.img.src = picString
    
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0; // faire bouger harry
    this.speedY = 0;
    }
   newPos(){
      this.x += this.speedX;
      this.y += this.speedY;
      console.log ('fonction reussi')
    }
  draw(){
    if (!this.img) return 

    //console.log('hey', this.width, this.height, this.x, this.y, myGameArea.context)
    //myGameArea.context.fillStyle = 'red'
    //myGameArea.context.fillRect(0, 0, 50, 50)
    myGameArea.context.drawImage(this.img, this.x, this.y, this.width, this.height) // si img chargés donc dessiner composant
  }

  update() {
    const ctx = myGameArea.context
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

const harry = new Component(180, 180, 'images/harrypotter.jpg', 0, 110); // joueur : harry potter


// faire bouger harry avec les fleches 
document.addEventListener('keydown', (e) => {
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
});

document.addEventListener('keyup', (e) => {
  harry.speedX = 0;
  harry.speedY = 0;
});

/*function updatevilains() {
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) { // generer toutes les 120millisec
    var W = myGameArea.canvas.width;
    var H = myGameArea.canvas.height;
 
    var minHeight = 20;
    var maxHeight = 200;
    var height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    
    var minGap = 50; // distance entre les mechants 
    var maxGap = 200;
    var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    
    vilains.push(new Component(10, height, RandomVillain, W, 0));
    vilains.push(new Component(10, H - height - gap, RandomVillain, W, height + gap));
    for (i = 0; i < vilains.length; i++) {
      vilains[i].x += -1;
      vilains[i].update();
    }
   console.log ('mechant reussi')
  }
}*/


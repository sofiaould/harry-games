/** @format */

class Component extends Base {
  constructor(width, height, picString, x, y) {
    super();
    const img = document.createElement("img"); // <img>
    this.img = img; // tableau images mechants
    this.img.onload = () => {
      //console.log("image chargee"); // ecrire des console si jamais tu es pas sure que ca marche
      this.draw();
    };
    //const ratio = img.naturalWidth / img.naturalHeight;
    this.img.src = picString;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= 12; // controle la vitesse de harry
   // console.log("move left");
  }
  moveRight() {
    this.x += 12;
    //console.log("move right");
  }
  moveUp() {
    this.y -= 12;
    //console.log("move up");
  }
  moveDown() {
    this.y += 12;
    //console.log("move down");
  }
}

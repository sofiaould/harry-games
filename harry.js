/** @format */

class Component extends Base {
  constructor(width, height, picString, x, y) {
    super()
    const img = document.createElement("img"); // <img>
    this.img = img; // tableau images mechants
    this.img.onload = () => {
      //console.log("image chargee"); // ecrire des console si jamais tu es pas sure que ca marche
      this.draw();
    };
    this.img.src = picString;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0; // faire bouger harry
    this.speedY = 0;
  }
  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
    //console.log("fonction reussi");
  }
  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

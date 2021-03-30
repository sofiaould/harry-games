/** @format */

// Random Y position
function randomPosition(from, to) {
  return Math.floor(from + Math.random() * (to - from));
}
// to random vilains type
const vilainsType = ["bellatrix", "detracteur", "lucius", "snake", "voldemort"];
function randomVil(vilains) {
  const randNum = Math.floor(Math.random() * Math.floor(vilainsType.length)); // 2
  return vilainsType[randNum];
}
class Vilains extends Base {
  constructor(name) {
    super();
    const img = document.createElement("img"); // <img>
    img.onload = () => {
      console.log("image chargee");
      // ecrire des console si jamais tu es pas sure que ca marche
      this.img = img;
      const ratio = img.naturalWidth / img.naturalHeight;
      this.name = name;
      this.width = 150;
      this.height = this.width / ratio;
      this.x = W;
      this.y = randomPosition(50, 600);
    };
    img.src = `images/${name}.png`; // faire apparaitre img
  }
  draw() {
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

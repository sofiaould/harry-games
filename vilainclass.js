const vilains = [
    'images/bellatrix.jpg',
    'images/Detracqueur.jpg',
    'images/lucius.jpg',
    '(images/nagini-serpent.jpg',
    'images/voldemort.jpg',
    'images/quirell.jpg'
  ];
function randomVillains(vilains){
    let randomNumber = Math.floor(Math.random()* vilains.length) // mechant aleatoire
return randomVillains[randomNumber]
}

class Vilains {
    constructor(name){
        const img = document.createElement('img'); // <img>
        this.img.onload = () => {
          console.log('image chargee')
           // ecrire des console si jamais tu es pas sure que ca marche
           this.img= img
           const ratio = img.naturalWidth/ img.naturalHeight
           this.name = name
           this.width= 150
           this.height= this.width/ ratio
           this.x = W
           this.y = 150
        }
        img.src = `./images/${name}.jpg` // faire apparaitre img 
    }
        
      draw(){
        if (!this.img) return 
    
        //console.log('hey', this.width, this.height, this.x, this.y, myGameArea.context)
        //myGameArea.context.fillStyle = 'red'
        //myGameArea.context.fillRect(0, 0, 50, 50)
       // myGameArea.context.drawImage(this.img, this.x, this.y, this.width, this.height) // si img chargés donc dessiner composant
      ctx.drawImages(this.img , this.x, this.y, this.width, this.height)
    
    }
};
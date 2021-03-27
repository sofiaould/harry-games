const vilains = [
    'bellatrix',
    'Detracqueur',
    'lucius',
    'nagini-serpent',
    'voldemort',
    'quirell'
  ];
  //console.log (vilains.length)
function randomVillains(vilains){
    let randomNumber = Math.floor(Math.random()* vilains.length) // mechant aleatoire
console.log ('reussie', randomNumber)
    return vilains[randomNumber]
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
           this.x = 150
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
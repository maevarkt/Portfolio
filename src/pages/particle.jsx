import React from "react";
import Sketch from "react-p5";

// let x = 50;
// let y = 50;
export function Particle (props) {
    class xParticle {
        // modèle sur lequel on va pouvoir dupliquer des objets qui auront des propriétés x, y, vx et vy particulières
          constructor (x,y,p5){
            this.x = x;
            this.y = y;
            this.vx = p5.random(-2,2);
            this.vy = p5.random(-2,2);
          }
          
          render(p5){
            let n = noiseAngle*p5.noise(noiseScale*this.x,noiseScale*this.y);
            //module la vitesse et la calculer en fonction de la valeur de noise à la position de la particule 
            this.vx = noiseSpeed*p5.cos(n);
            // on module les vitesse en fonction des valeurs de noise 
            // on considère que n*360 est un angle exprimé en degré
            // cette opération permet de transformer un nombre entre 0 et 1 en vecteur qui va avoir une rotation
            this.vy = noiseSpeed*p5.sin(n);
            
            this.x = this.x + this.vx;
            this.y = this.y + this.vy;
            // dans cette fonction, la particule se déplace en fonction de     la vitesse 
            if (this.x<0 || this.x>p5.width || this.y<0 || this.y>p5.height){
              this.x = p5.random(0,p5.width);
              this.x = p5.random(0,p5.height); 
          }
            //circle(this.x,this.y,5); 
            p5.point(this.x, this.y);
        }
    }

    let nb = 1000; // on remplace l'occurence du nombre de particules par une variable
    let dMin = 50;
    let noiseScale = 0.01;
    let noiseAngle = 360;
    let noiseSpeed = 1.5; // plus on augmente la valeur plus on a des coubles sablonneuses
    let ageMax = 200;
    let p = Array(nb);

  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    p5.background(0);
    // en plaçant cette fonction dans le setup et plus dans le draw, on a des courbes qui se déplace et plus des points
    for(let i=0; i<nb; i=i+1) {
    // pour remplir le tableau, on utilise une boucle une qui va contrôler la création des particules 
        p[i] = new xParticle(p5.random(0,p5.width),p5.random(0,p5.height),p5);
    }
    // dans la cellule i je positionne une particule qui aura comme position originale x=250,y=250 (centre du canvas que l'on remplace par une valeur aléatoire

  };

  const draw = (p5) => {
    //noStroke();
    //fill(255);
    //stroke(255);
    p5.stroke(255, p5.map(p5.frameCount,1,ageMax,255,0));
    // on donne aux particules une transparence qui dépend du framCount, plus on avance dans le programme plus la transparence va tendre vers 0
    for (let i=0; i<nb; i=i+1){
      p[i].render(p5);
    }
  };

  return (
    <div className="w-full h-full p-5 bg-[#1D1F20] min-h-full">
        <h2 className="text-[#ff4d6d] font-italiana text-8xl uppercase font-bold mb-4">Particules</h2>
        <p className="text-white py-2">Les particules font un mouvement aléatoire qui ne rend jamais le même dessin</p>
        <Sketch setup={setup} draw={draw} />
    </div>
)
}

export default Particle;
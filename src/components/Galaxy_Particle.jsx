import React from "react";
import Sketch from "react-p5";

export default function Galaxy_Particle (props) {
    class yParticle{
        // modèle sur lequel on va pouvoir dupliquer des objets qui auront des propriétés x, y, vx et vy particulières
          constructor (x,y,p5){
            this.x = x;
            this.y = y;
            this.vx = p5.random(-2,2);
            this.vy = p5.random(-2,2);
          }
          
          render(p5){
            this.x = this.x + this.vx;
            this.y = this.y + this.vy;
            // dans cette fonction, la particule se déplace en fonction de la vitesse 
          if (this.x<0 || this.x>p5.width || this.y<0 || this.y>p5.height){
            this.x = p5.random(0,p5.width);
            this.x = p5.random(0,p5.height); 
          }
            p5.circle(this.x,this.y,5); 
        }
    }

    let nb = 100; // on remplace l'occurence du nombre de particules par une variable
    let dMin = 70;
    let p = Array(nb);

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
        for(let i=0; i<nb; i=i+1)
        // pour remplir le tableau, on utilise une boucle une qui va contrôler la création des particules 
        p [i]= new yParticle(p5.random(0,p5.width),p5.random(0,p5.height), p5);
        // dans la cellule i je positionne une particule qui aura comme position originale x=250,y=250 (centre du canvas que l'on remplace par une valeur aléatoire
    }

    const draw = (p5) => {
        p5.background(0);
        p5.noStroke();
        p5.fill(255);
        for (let i=0; i<nb; i=i+1){
            p[i].render(p5);
        }

    // pour relier par un trait les particules qui sont proches l'une de l'autre. Pour ce faire, on parcourt la lite de toutes les particules et examiner la distance à toutes les particules 
    // toutes les particules ont un index
    // on obtiendra une structure que les particules bougeront dans tous les sens. un réseau de liens se tissera et au gré des mouvements
        p5.stroke(255);
        
        for(let i=0; i<nb; i=i+1){
        let pi = p[i];
        //on stocke la particule i dans une variable temporaire
            for(let j=i+1; j<nb; j=j+1){
            // on évalue la distance entre les particules 0 et 1, 0 et 2, etc. Ensuite, on évaluera la distance entre les particules 1 et 2, etc. pour chaque index. 
            let pj = p[j];
            let d = p5.dist(pi.x, pi.y, pj.x, pj.y);
            // distance entre deux particules (param x,y du premier point)
                if(d<dMin){
                // si la distance est inférieure à 100px, alors on dessine une ligne
                    p5.line(pi.x, pi.y, pj.x, pj.y);
                }
            }
        }
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}
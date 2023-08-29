import React from "react"; 
import Sketch from "react-p5";

export function Hover (props) {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
    }

    const draw = (p5) => {
        p5.background(0);
        //fond blanc
        p5.fill(255);
        // remplissage noir
        p5.noStroke();
        // pas de bordure

        if (p5.mouseX < p5.width/3){
            // on compare la position en x de la souris à la variable width
            // on sépare le canvas en 3
            p5.rectMode(p5.CENTER); 
            // on dessine un rectangle par rapport au centre
            p5.square(p5.width/2,p5.height/2,400);
            // on voit un carré. Lorsque l'on passe le curseur sur le 1er tiers, le carré disparaît 
        }
        else if (p5.mouseX < 2 * p5.width/3){
            p5.circle(p5.width/2,p5.height/2,400);
            // si le curseur sur le 2e tiers du canvas, on voit un cercle noir
        }
        else{
          p5.triangle(250,50,450,450,50,450)
          // si on passe le curseur sur le 3e tiers du canvas, on voit un triangle noir
        }
    }

    return (
        <div className="w-full h-full p-5 bg-[#1D1F20] min-h-full">
            <h2 className="text-[#ff4d6d] font-italiana text-8xl uppercase font-bold mb-4">Hover</h2>
            <p className="text-white py-2">Survolez la forme</p>
            <Sketch setup={setup} draw={draw} />
        </div>
    )
    }
    
    export default Hover;
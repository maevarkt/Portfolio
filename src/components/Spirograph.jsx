import React from "react"; 
import Sketch from "react-p5";

export default function Spirograph (props) {
    let nb = 30; // indique combien de formes je vais dessiner grâce à une boucle
    let rot = 3; // rotation
    let dim = 350;
    let f = 1.0; // détermine l'échelle du carré 
    let fmin = 0.5;
    let sliderNb, sliderRot, sliderFmin;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
        p5.rectMode(p5.CENTER);
        // l'origine du carré est au centre du canevas
        p5.angleMode(p5.DEGREES);
        // permet d'exprimer les angles en degré 
        sliderNb = p5.createSlider(2,50,nb,1).parent(canvasParentRef);
        // cette fonction prend 4 param : valeur min de la variable, valeur max de la variable, valeur par déf, pas du slider
        // slider du nombre de formes à dupliquer 
        // le slider permet de ne pas manipuler le code et de voir visuellement ce qu'il se passe si on ajoute ou retire des carrés 
        sliderRot = p5.createSlider(0,90,rot).parent(canvasParentRef);
        // slider de rotation 
        sliderFmin = p5.createSlider(0.0,1.0,fmin,0.05).parent(canvasParentRef);
        // slider de taille des carrés 
    }

    const draw = (p5) => {
        nb = sliderNb.value();
        rot = sliderRot.value();
        fmin = sliderFmin.value();
        
        p5.background(0);
        p5.translate(p5.width/2, p5.height/2);
        // fonction qui déplace le repère 0 au centre du canvas 
        // permet de faire pivoter le carré 
        p5.noFill(); 
        p5.stroke(255);
        for (let i=0; i<nb; i=i+1){
            f = p5.map(i,0,nb-1,1,fmin);
            // la taille du carré diminue quand i augmente 
            // map permet de prendre une valeur dans un intervalle donné et de la reprojeter dans un interval différent 
            p5.square(0,0,f * dim);
            p5.rotate(rot);
        }
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )

}
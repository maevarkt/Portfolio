import React from "react"; 
import Sketch from "react-p5";

export default function Grid (props) {
    let nb = 20; // nombre de cercles sur le canvas 
    let dim = 0; // variable pour dimension (correspond au diamètre si on laisse les cercles)
    let margin = 60; // on met une marge
    let f = 0.25// permet de mettre les cercles à l'échelle simultanément
    let frequence = 1.5; // permet de varier la vitesse d'oscillation de tous les cercles
    let x,y; 

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef);
        p5.dim = (p5.width-2*margin)/nb; 
        p5.angleMode(p5.DEGREES);
        // toutes les fonctions qui utilisent des angles sont exprimées en degrés et non en radian 
        // p5.createLoop( {duration:2, gif:true} );
        // //ce n'est pas une fonction native. On utilise un objet JS (système clé/valeur). Ce code permet de créer un gif d'une durée de 2 sec (après avoir mis le script de la librairie createloop en html)
    }

    const draw = (p5) => {
        p5.background(0);
        //p5.noStroke(); // pas de contours 
        p5.fill(255); // remplissage blanc
        // p5.stroke(255); // contours
        // p5.noFill(); // pas de remplissage 
        p5.rectMode(p5.CENTER); // permet de dessiner des rectangles à partir de leur centre et non à partir du coin supérieur gauche 
  
        for (let j=0 ; j<nb ; j=j+1){
            for(let i=0 ; i<nb ; i=i+1){
                x = margin + dim/2+i*dim; 
                y = margin + dim/2+j*dim;
                // f = p5.sin(frequence * p5.frameCount + 0.5*p5.dist(p5.width/2,p5.height/2,x,y));
                f = p5.sin(frequence * p5.frameCount + 2.5*p5.dist(p5.mouseX,p5.mouseY,x,y));
                // frameCount est une variable qui prend les valeurs 0,1,2,3, etc. au fur et à mesure de l'éxecution du programme 
                // permet l'oscillation des cercles
                // la fonction dist prend 4 params : position x et y du point, et les variables x et y qui sont la position du cercles que l'on dessine dans la boucle imbriquée
                // dist (exprimé en pixel) permet un déphasage par rapport aux cercles de la grille initiale
                console.log(f)
                
                p5.circle(x, y, f * dim);
                // on met une marge sur les axes x et y
                // d'abord, sur l'axe x, on dessine 10 cercles alignés les uns à la suite des autres, sur la largeur de mon canevas
                // la position y de nos cercles va évoluer en fonction de i et en fonction de j (sur l'axe x et l'axe y). On a une grille de cercles
                //rect(dim/2+i*dim, dim/2+j*dim, 0.6*dim, 0.4*dim);
                // iso circle, rect() prend 4 param (x, y, largeur, hauteur). Si on ne change pas dim, on a un rectangle blanc 
            }
        }
    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}
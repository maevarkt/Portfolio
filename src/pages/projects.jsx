import React from "react";
import 'animate.css';

export const Projects = () => {
    const callback = function (entries) {
        entries.forEach((entry) => {
          console.log(entry);
      
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          } else {
            entry.target.classList.remove("animate-fadeIn");
          }
        });
      };
      
      const observer = new IntersectionObserver(callback);
      
      const targets = document.querySelectorAll(".js-show-on-scroll");
      targets.forEach(function (target) {
        target.classList.add("opacity-0");
        observer.observe(target);
      });

    return (
        <div className="w-full h-full p-5 bg-[#1D1F20] min-h-screen">
            <h2 className="font-italiana my-5 ml-4 text-8xl uppercase font-bold text-[#ff4d6d]">Projets</h2>
                <div>
                    {/* Codev22 */}
                    <div className="h-full py-5 mx-4 md:grid grid-cols-2 gap-6 flex flex-wrap min-h-screen js-show-on-scroll">
                        <img className="mb-8" src="./img/codev.png" alt="Codev22"/>
                        <div className="mb-2">
                            <h3 className="text-6xl mb-4 font-italiana uppercase font-bold text-[#e1e1e5]">Codev22</h3>
                            <p>
                                <span className="bg-[#ff4d6d] text-white mr-4 p-2">Lua</span>
                                <span className="bg-[#ff4d6d] text-white mr-4 p-2">User interface</span>
                                <span className="bg-[#ff4d6d] text-white mr-4 p-2">HUD</span>
                                <span className="bg-[#ff4d6d] text-white mr-4 p-2">Animation 2D</span>
                            </p>
                            <p className="my-8 text-[#e1e1e5]">
                                Codev22 est un jeu rétro Pico-8, une console virtuelle qui permet de créer, partager, et jouer à des minijeux. L'objectif : échapper au virus Codev pour ne pas perdre de vie et atteindre la maison pour gagner la partie. 
                            </p>
                            <p>
                                <a className="text-[#ff4d6d]" href="https://www.lexaloffle.com/bbs/?tid=50033" target="_blank">Voir le projet</a>
                            </p>
                        </div>
                    </div>
                    {/* Focus extension */}
                    <div className="h-full py-5 mx-4 md:grid grid-cols-2 gap-6 flex flex-wrap min-h-screen js-show-on-scroll">
                        <img src="./img/focus.png" alt="Focus"/>
                        <div className="mt-4">
                            <h3 className="text-6xl mb-4 font-italiana uppercase font-bold text-[#e1e1e5]">Focus</h3>
                                <p className="mt-2">
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">Extension</span>
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">JavaScript</span>
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">API</span>
                                </p>
                                <p className="my-8 text-[#e1e1e5] py-4 text-justify">
                                    Focus est une extension Chrome conçue pour aider les utilisateurs à gérer leur navigation web en limitant le nombre d'onglets ouverts simultanément dans leur navigateur. Cette extension permettra aux utilisateurs de définir un nombre maximum d'onglets qu'ils souhaitent avoir ouverts en même temps. Lorsque le nombre limite est atteint, les nouveaux onglets seront automatiquement fermés. Les utilisateurs pourront naviguer sur le web de manière plus efficace et sans distractions inutiles, ce qui rendra leur expérience de navigation plus agréable et plus productive.
                                </p>
                                <p>
                                    <a className="text-[#ff4d6d]" href="https://github.com/maevarkt/focus-extension" target="_blank">Voir le projet</a>
                                </p>
                            </div>
                        
                    </div>
                    {/* Creative coding */}
                    <div className="h-full py-5 mx-4 gap-6 flex flex-wrap min-h-screen  js-show-on-scroll">
                        <h3 className="text-6xl mb-4 font-italiana uppercase font-bold text-[#e1e1e5]">Creative coding</h3>
                        <p className="my-5">
                            <span className="bg-[#ff4d6d] text-white mr-4 p-2">JavaScript</span>
                            <span className="bg-[#ff4d6d] text-white mr-4 p-2">Art numérique</span>
                            <span className="bg-[#ff4d6d] text-white mr-4 p-2">p5.js</span>
                        </p>
                        <div className="py-2 border-b border-gray-200 dark:border-gray-700 flex flex-row overflow-x-scroll space-x-5 ">
                            <div className="relative">
                                <img src="./img/spirograph.png" className="max-w-none"/>
                                <a href="./spirograph" className="text-[#ff4d6d] font-bold hover:bg-[#ff4d6d] hover:text-black duration-500 flex items-center justify-center absolute inset-0">Voir le projet</a>
                            </div>
                            <div className="relative">
                                <img src="./img/galaxy.png" className="max-w-none"/>
                                <a href="./galaxy" className="text-[#ff4d6d] font-bold hover:bg-[#ff4d6d] hover:text-black duration-500 flex items-center justify-center absolute inset-0">Voir le projet</a>
                            </div>
                            <div className="relative">
                                <img src="./img/particules.png" className="max-w-none"/>
                                <a href="./particle" className="text-[#ff4d6d] font-bold hover:bg-[#ff4d6d] hover:text-black duration-500 flex items-center justify-center absolute inset-0">Voir le projet</a>
                            </div>
                            <div className="relative">
                                <img src="./img/hover.png" className="max-w-none"/>
                                <a href="./hover" className="text-[#ff4d6d] font-bold hover:bg-[#ff4d6d] hover:text-black duration-500 flex items-center justify-center absolute inset-0">Voir le projet</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
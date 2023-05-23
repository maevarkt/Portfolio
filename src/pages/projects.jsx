import React from "react";
import 'animate.css';
import Hover from "../components/Hover";
// import Grid from "../components/Grid";
import Spirograph from "../components/Spirograph";
import Particles from "../components/Particle";
import Galaxy_Particle from "../components/Galaxy_Particle";

export const Projects = () => {
    
    return (
        <div className="w-full p-5 bg-[#1D1F20] min-h-screen">
            <h2 className="font-italiana my-5 ml-4 text-8xl uppercase font-bold text-[#ff4d6d]">Projets</h2>
                {/* Accordion */}
                <div id="accordion-flush" data-accordion="collapse" className="mx-4" data-active-classes="text-gray-200 dark:bg-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                    {/* Codev22 */}
                    <h3 id="accordion-flush-heading-1">
                        <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-100 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
                        <span className="font-italiana text-xl font-bold">Codev22</span>
                        <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700 md:grid grid-cols-2 gap-6 flex flex-wrap">
                            <img className="mb-8" src="./img/codev.png" alt="Codev22"/>
                            <div className="mb-2 text-gray-500 dark:text-gray-400">
                                <p>
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">Lua</span>
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">User interface</span>
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">HUD</span>
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">Animation 2D</span>
                                </p>
                                <p className="my-8">
                                    Codev22 est un jeu rétro Pico-8, une console virtuelle qui permet de créer, partager, et jouer à des minijeux. L'objectif : échapper au virus Codev pour ne pas perdre de vie et atteindre la maison pour gagner la partie. 
                                </p>
                                <p>
                                    <a className="text-[#ff4d6d]" href="https://www.lexaloffle.com/bbs/?tid=50033" target="_blank">Voir le projet</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Focus extension */}
                    <h3 id="accordion-flush-heading-2">
                        <button type="button" class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-100 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
                        <span className="font-italiana text-xl font-bold">Focus Extension</span>
                        <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700 md:grid grid-cols-2 flex flex-wrap">
                            <img src="./img/focus.png" alt="Codev22"/>
                            <div className="mt-4">
                                <p className="mt-2">
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">Extension</span>
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">JavaScript</span>
                                    <span className="bg-[#ff4d6d] text-white mr-4 p-2">API</span>
                                </p>
                                <p className="my-8 text-gray-500 dark:text-gray-400 py-4 text-justify">
                                    Focus est une extension Chrome est conçue pour aider les utilisateurs à gérer leur navigation web en limitant le nombre d'onglets ouverts simultanément dans leur navigateur. Cette extension pratique permettra aux utilisateurs de définir un nombre maximum d'onglets qu'ils souhaitent avoir ouverts en même temps. Lorsque le nombre limite est atteint, les nouveaux onglets seront automatiquement fermés. Les utilisateurs pourront naviguer sur le web de manière plus efficace et sans distractions inutiles, ce qui rendra leur expérience de navigation plus agréable et plus productive.
                                </p>
                                <p>
                                    <a className="text-[#ff4d6d]" href="https://github.com/maevarkt/focus-extension" target="_blank">Voir le projet</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Creative coding */}
                    <h3 id="accordion-flush-heading-3">
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-100 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
                        <span className="font-italiana text-xl font-bold">Creative coding</span>
                        <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </h3>
                    <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
                        <p className="my-8">
                            <span className="bg-[#ff4d6d] text-white mr-4 p-2">JavaScript</span>
                            <span className="bg-[#ff4d6d] text-white mr-4 p-2">Art numérique</span>
                        </p>
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700 flex flex-row overflow-x-scroll space-x-5 ">
                            <div>
                                <Hover/>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Survolez horizontalement
                                </p>
                            </div>
                            <div>
                                <Spirograph/>
                            </div>
                            <div>
                                <Particles/>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Particules aléatoire au chargement
                                </p>
                            </div>
                            <div>
                                <Galaxy_Particle/>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Particules
                                </p>
                            </div>
                            {/* <div>
                                <Grid/>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Survolez le sketch
                                </p>
                            </div>                             */}
                        </div>
                    </div>
                </div>
        </div>
    )
}
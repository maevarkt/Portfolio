import React from 'react';

const Home = () => {
    return (
        <div>
            <nav className='h-screen w-full grid grid-cols-6 gap-0 border-solid border-2 border-[rgb(21,21,21)]'>
                <a href='/about' className='border-solid border-2 border-[black] text-[#F5FDF2] bg-[#1D1F20] col-start-1 col-end-3 row-span-5 flex items-center justify-center font-italiana text-xl uppercase hover:bg-[#ff4d6d] duration-500'>
                    A propos
                </a>
                <a href='/experience' className='col-span-4 border-solid border-2 border-[black] text-[#F5FDF2] bg-[#1D1F20] row-span-3 flex items-center justify-center font-italiana text-xl uppercase hover:bg-[#ff4d6d] duration-500'>
                    CV
                </a>
                <a href='/' className='border-solid border-2 border-[black] col-start-3 col-span-2 row-span-2 flex items-center justify-center text-4xl font-eduqld text-[#151515] bg-[#F5FDF2] hover:text-[#ff4d6d]'>
                    MaeLab
                </a>
                <a href='/projects' className='col-span-4 border-solid border-2 border-[black] text-[#F5FDF2] bg-[#1D1F20] row-span-3 flex items-center justify-center font-italiana text-xl uppercase hover:bg-[#ff4d6d] duration-500'>
                    Projets
                </a>
                <a href='/contact' className='border-solid border-2 border-[black] text-[#F5FDF2] bg-[#1D1F20] col-start-5 col-span-2 row-start-4 row-span-5 flex items-center justify-center font-italiana text-xl uppercase hover:bg-[#ff4d6d] duration-500'>
                    Contact
                </a>

                <div className='border-[#151515] border-solid border-2 bg-[#F5FDF2] col-start-1 col-end-7 flex items-center justify-center relative overflow-x-hidden' id='marquee_text'>
                    <div className='uppercase font-bold py-4 animate-marquee whitespace-nowrap bg-[#F5FDF2]'>
                        Développeuse en formation 
                        <span className='text-[#ff4d6d] text-xl font-bold bg-[#F5FDF2]'> | </span>
                        A la recherche d'un contrat de professionnalisation de 12 mois (4 jours en entreprise, 1 jour à l'école)
                        <span className='text-[#ff4d6d] text-xl font-bold bg-[#F5FDF2]'> |  </span>
                    </div>
                    <div className='uppercase font-bold py-4 absolute animate-marquee2 whitespace-nowrap bg-[#F5FDF2]'>
                        Développeuse en formation 
                        <span className='text-[#ff4d6d] text-xl font-bold bg-[#F5FDF2]'> | </span>
                        A la recherche d'un contrat de professionnalisation de 12 mois (4 jours en entreprise, 1 jour à l'école)
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Home
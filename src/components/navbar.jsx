import React, {useLocation} from 'react-router-dom';// useLocation = hook donnant la localisation courante
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

export default function Navbar () {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav)
    // mobile menu : pour afficher le burger ou la croix

    const location = useLocation();
    // pour savoir où on se situe dans l'appli
    // console.log(location.pathname)

    if (location.pathname === "/"){
        return null
    }
    // pour ne pas afficher la navbar sur la homepage

    let Links = [
        {name:"Accueil",link:"/"},
        {name:"A propos",link:"/about"},
        {name:"CV",link:"/experience"},
        {name:"Projets",link:"/projects"},
        {name:"Contact",link:"/contact"},
    ]
    // gestion des links

    return (
        <header className='p-5 bg-[#1D1F20] text-white flex justify-between px-4 shadow-2xl sticky top-0 z-10'>
            {/* Logo */}
            <span className='text-4xl ml-4 cursor-pointer font-eduqld text-transparent bg-clip-text bg-gradient-to-br from-[#a4133c] via-[#ff4d6d] to-[#ffccd5]'>
                <a href="/">MaeLab</a>
            </span>

            {/* Menu */}
            <div className='hidden md:flex space-x-2'>
                <ul className='bg-[#1D1F20] font-italiana uppercase transition-all ease-in duration-500 hidden md:flex'>
                {
                    Links.map((link) => (
                        <li key={link.name} className='px-4'>
                            <a href={link.link} className="text-xl hover:text-[#ff4d6d] duration-500">{link.name}</a>
                        </li>
                    ))
                }
                </ul>
            </div>

            {/* Hamburger */}
            <div onClick= {handleClick} className='text-3xl cursor-pointer mx-4 md:hidden z-20'>
                {!nav ? <FaBars/> : <FaTimes/>}            
            </div>

            {/* Mobile menu */}
            <ul className= {!nav ? 'hidden' : 'font-italiana uppercase bg-[#1D1F20] transition-all ease-in duration-500 absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-10 shadow-2xl'}>
            {
                Links.map((link) => (
                    <li key={link.name} className='text-4xl py-6'>
                        <a href={link.link} className="hover:text-[#ff4d6d] duration-500">{link.name}</a>
                    </li>
                ))
            }
            </ul>
        </header>
    )
}
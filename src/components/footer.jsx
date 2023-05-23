import React from 'react-router-dom';

export default function Footer () {
    return (
        <footer className='bg-[#1D1F20] text-white flex justify-between items center h-16 p-8 mb-4 md:py-5'>
            <div>
                <p>&copy; Maëva Rakotonirina 2023</p>
            </div>

            <div className="text-7xl flex space-x-10 ">
                <div className="text-4xl">
                    <a href="https://www.linkedin.com/in/ma%C3%ABva-rakotonirina-4716b8173/" className="text-[#ff4d6d]" >
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </div>
                <div className="text-4xl">
                    <a href="https://github.com/maevarkt" className="text-[#ff4d6d]">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>       
            </div>
        </footer>

    )
}

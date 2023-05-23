import React from 'react';
import 'animate.css';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdzlgb");
  if (state.succeeded) {
      return <p className='text-[#ff4d6d] text-4xl uppercase font-italiana w-full h-screen flex flex-col justify-center items-center transition-all ease-in duration-500'>Merci et à bientôt !</p>;
  }
  return (
    <div className="bg-[#1D1F20] py-4 flex flex-col place-items-center">
        <h2 className="text-[#ff4d6d] font-italiana my-5 text-8xl uppercase font-bold">
            Contact
        </h2>
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="p-4 w-96">
                <div className="my-8">
                    <input 
                    id="nom" 
                    type="text" 
                    name="nom" 
                    placeholder="Votre nom" 
                    className="border-solid border-2 border-black p-2 w-full"/>
                </div>
                <div className="my-8">
                    <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Email"
                    className="border-solid border-2 border-black p-2 w-full"
                    />
                    <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />
                </div>
                <div className="my-8">
                    <textarea
                    id="message"
                    name="message"
                    rows="10" 
                    placeholder="Votre message" 
                    className="border-solid border-2 border-black p-2 w-full"
                    />
                    <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                    />
                </div>
                <div className="my-8 flex flex-col items-center justify-center">
                    <button 
                    type="submit"
                    className="text-center bg-[#1D1F20] text-white w-28 px-auto border-solid border-2 border-white] hover:bg-[#ff4d6d] hover:text-white duration-500 font-italiana uppercase font-bold">
                    Envoyer
                    </button>
                </div>
            </form>
        </div>
    </div>
  );
}
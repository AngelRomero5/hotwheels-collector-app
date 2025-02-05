import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Models from '../CarModels/index';

export default function Home() {
    const [searchModelInput, setSearchModelInput] = useState('');

    const handleButtonClick = () => {
        const inputValue = document.getElementById("searchModelInput").value; 
        setSearchModelInput(inputValue);
        <Route path="/models" component={Models} />
    };

    return (
        <>
            <section className="w-full">
                {/* Here goes the card of the landing page */}
                <div className="flex flex-col justify-center space-y-4 items-center bg-gray-50 text-center py-20">
                    <p className='text-lg text-blue-950'>Welcome to</p>
                    <h1 className='text-7xl text-red-600'>Cloud Vault</h1>
                    <p className='text-md text-blue-950'>Where you can create and manage all your HotWheels collections in the same place</p>
                    <input 
                        id="searchModelInput"
                        value={searchModelInput}
                        onChange={(e) => setSearchModelInput(e.target.value)}
                        type="text" 
                        autoComplete="off" 
                        placeholder="Search for a model" 
                        className="w-1/2 py-2 px-4 border focus:outline-none focus:border-red-600 border-gray-300 rounded-full" 
                    />
                    <button 
                        onClick={handleButtonClick}
                        className="bg-red-600 text-white px-4 py-1 w-1/2 border border-transparent rounded-full hover:bg-white hover:text-red-700 hover:border hover:border-red-700 box-border"
                    >Get Started</button>
                </div>
            </section>
        </>
    );
}
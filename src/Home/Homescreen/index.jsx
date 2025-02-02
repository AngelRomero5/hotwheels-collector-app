import React from 'react';

export default function Homescreen() {
    return (
        <>
            <section className="w-full">
                {/* Here goes the card od the landing page */}
                <div className="flex flex-row justify-between items-center bg-gray-100">
                    <div className="flex flex-col justify-center space-y-4">
                        <p className='text-xl'>Welcome to</p>
                        <h1 className='text-5xl text-red-700'>Cloud 64</h1>
                        <p className='text-md'>Where you can create and manage all your HotWheels collections in the same place</p>
                        <button className="bg-red-700 text-white px-4 py-1 w-1/2 border border-transparent rounded hover:bg-white hover:text-red-700 hover:border hover:border-red-700 box-border">Get Started</button>
                    </div>
                    <div>
                        <img src=""/>
                        <h1>Hola</h1>
                    </div>
                </div>
            </section>

        </>
    );
}
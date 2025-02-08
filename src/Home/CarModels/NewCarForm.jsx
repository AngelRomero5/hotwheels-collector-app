import React, { useState } from 'react';
import axios from '../../api/axios';

export default function NewCarForm({ isVisible, onClose}) {

    // Input fields data from the user
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [nameOnPackage, setNameOnPackage] = useState('');
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [series, setSeries] = useState('');

    // Fields for the form
    const fields = [
        { id: 'name', label: 'Name', placeholder: 'Enter name on the package', value: nameOnPackage, onChange: setNameOnPackage },
        { id: 'make', label: 'Make', placeholder: 'Enter make', value: make, onChange: setMake },
        { id: 'model', label: 'Model', placeholder: 'Enter model', value: model, onChange: setModel },
        { id: 'series', label: 'Series', placeholder: 'Enter series', value: series, onChange: setSeries },
    ];
    // const [price, setPrice] = useState('');

    const handleFrontImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFrontImage(URL.createObjectURL(file));
        }
    };

    const handleBackImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBackImage(URL.createObjectURL(file));
        }
    };

    //  TODO: add tokens through the whole application in every request and test this function

    // Create a new car in DB
    const newCar = async (event) => {
        event.preventDefault();

        const newCar = {
            nameonpackage: nameOnPackage,
            brand: make,
            model: model,
            series: series
        };
            try {
                const response = await axios.post('/NewCar',{
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                }
                });

                if (!response.ok) {
                    throw new Error('Failed to add car');
                }
                console.log('Car added successfully! : ', response.data);
            } catch (error) {
                console.error('Error adding car:', error);
            }
    }

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition duration-300">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg overflow-hidden shadow-lg bg-white relative border border-red-600">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-800 hover:text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                    </svg>
                </button>
                <form className="px-6 pb-4 pt-8">
                    <h1 className="text-3xl text-red-600 font-bold mb-4 text-center"> Add New Model </h1>
                    {/* Images upload */}
                    <div className="w-full h-64 bg-gray-300 rounded-lg flex flex-row items-center justify-center mb-4 space-x-4">
                        <div className='flex flex-col items-center justify-center'>
                            <div className="relative w-52 h-52 bg-white border rounded-lg border-blue-500 shadow-md flex items-center justify-center">
                                {frontImage ? (
                                <>
                                    <img src={frontImage} alt="Front" className="w-full h-full object-contain" />
                                    <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-white">Change image</p>
                                    </div>
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFrontImageChange} />
                                </>
                            ) : (
                                <>
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFrontImageChange} />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </>
                            )}
                            </div>
                            <p>Upload front image</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <div className="relative w-52 h-52 bg-white border rounded-lg border-blue-500 shadow-md flex items-center justify-center">
                                {backImage ? (
                                <>
                                    <img src={backImage} alt="Back" className="w-full h-full object-contain" />
                                    <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-white">Change image</p>
                                    </div>
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleBackImageChange} />
                                </>
                            ) : (
                                <>
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleBackImageChange} />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </>
                            )}
                            </div>
                            <p>Upload back image</p>
                        </div>
                    </div>
                    {/* Fields */}
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                        {fields.map((field) => (
                            <div key={field.id} className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.id}>
                                    {field.label}
                                </label>
                                <input
                                    id={field.id}
                                    type="text"
                                    placeholder={field.placeholder}
                                    autoComplete='off'
                                    value={field.value}
                                    onChange={(e) => field.onChange(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 border-red-600 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                        ))}
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                onClick={newCar}
                                className={"bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
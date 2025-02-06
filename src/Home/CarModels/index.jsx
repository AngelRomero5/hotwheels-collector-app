import React, {useState, useEffect} from 'react';
import axios from "../../api/axios";

export default function Models(){

    const [searchModelInput, setSearchModelInput] = useState('');
    const [error, setError] = useState(null);


    const [models, setModels] = useState([ 
        {
            id: 1,
            name: "2017 Camaro ZL1",
            description: "Muscle Mania 5/10",
            price: "$10",
            image: "img/camaro.jpg"
        },{
            id: 2,
            name: "Model 2",
            description: "Description ",
            price: "$20",
            image: "img/camaro.jpg"
        },{
            id: 3,
            name: "Model 3",
            description: "Description",
            price: "$30",
            image: "img/camaro.jpg"
        },{
            id: 4,
            name: "Model 4",
            description: "Description",
            price: "$10",
            image: "img/camaro.jpg"
        },{
            id: 5,
            name: "Model 5",
            description: "Description",
            price: "$10",
            image: "img/camaro.jpg"
        },{
            id: 6,
            name: "Model 6",
            description: "Description ",
            price: "$10",
            image: "img/camaro.jpg"
        },

    ]);

    const [seriesFilter, setSeriesFilter] = useState([]);
    const [makeFilter, setMakeFilter] = useState([]);
    const [modelFilter, setModelFilter] = useState([]);
    const [yearFilter, setYearFilter] = useState([]);
    const [priceFilter, setPriceFilter] = useState([]);


    
    // useEffect(() => { 
    //     const getModels = async () => {
    //         try {
    //             const response = await axios.get('/models', {
    //                 params: {
    //                     name: searchModelInput
    //                 }
    //             });
    //             setModels(response.data);
    //             console.log(response);
    //         } catch (error){
                    // setError(error);
    //             console.error(error);
    //         }
    //     }
    //     getModels();
    // }, [searchModelInput]);


    return(
         <>
        <section className='flex flex-row justify-center py-8 px-32 bg-gray-100'>
            <div className='flex flex-col space-y-5 text-center'>
                <h1 className='text-5xl text-red-600 font-medium'>Models</h1>
                <p className='text-sm text-blue-950 inline-flex items-center'>
                    Here you can add, edit and view all the 
                    <img src='img/hotwheels-logo.png' alt="hotwheels-logo" className="w-16 h-5 inline mx-1"/> 
                    models we have in our database. Be sure to add them to your collection!
                </p>
            </div>
             {/* <div className="flex flex-row space-x-2"> */}
                
                {/* <button className="flex items-center justify-center">
                    <span className="bg-red-600 border border-box border-full text-white text-xl rounded-full w-8 h-8 flex items-center justify-center leading-none">
                        +
                    </span>
                </button> */}
            {/* </div> */}
        </section>
        <section className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
            <div className="bg-white p-4 rounded-lg shadow-sm col-span-1">
                <div className='flex flex-row justify-center items-center space-x-4 pb-2'>
                    <h1 className='text-2xl'>Filters</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                    </svg>
                </div>
                <hr/> 
                <div className='flex flex-col space-y-4'>
                    <div>
                        <label htmlFor="series">Series</label>
                        <select name="series" id="series" className="w-full py- px-4 border focus:outline-none focus:border-red-600 border-gray-300 rounded-lg">
                            <option value="all">All</option>
                            {seriesFilter.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="makes">Makes</label>
                        <select name="makes" id="makes" className="w-full py- px-4 border focus:outline-none focus:border-red-600 border-gray-300 rounded-lg">
                            <option value="all">All</option>
                            {makeFilter.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="models">Models</label>
                        <select name="models" id="models" className="w-full py- px-4 border focus:outline-none focus:border-red-600 border-gray-300 rounded-lg">
                            <option value="all">All</option>
                            {modelFilter.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="year">Year</label>
                        <select name="year" id="year" className="w-full py- px-4 border focus:outline-none focus:border-red-600 border-gray-300 rounded-lg">
                            <option value="all">All</option>
                            {yearFilter.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <select name="price" id="price" className="w-full py- px-4 border focus:outline-none focus:border-red-600 border-gray-300 rounded-lg">
                            <option value="all">All</option>
                            {priceFilter.map((item) => (
                                <option key={item.id} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
            </div>
            <div className="bg-gray-100 col-span-3 space-y-10">
                <div className="flex flex-row justify-between items-center space-x-4">
                    <div className="relative w-full">
                        <input 
                            id="searchModelInput"
                            // value={searchModelInput}
                            // onChange={(e) => setSearchModelInput(e.target.value)}
                            type="text" 
                            autoComplete="off" 
                            placeholder="Search for a model" 
                            className="w-full py-2 px-4 border focus:outline-none focus:border-red-600 border-gray-300 rounded-full pr-10" 
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                    <button className='bg-red-600 text-white rounded-full hover:bg-white hover:text-red-600 transition duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>

                <p className='whitespace-nowrap'>Sort by: </p>
                    <select>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="price">Price</option>
                    </select>
                    </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {models.map((model) => (
                        <div key={model.id} className='p-2 bg-white rounded-lg shadow-md w-full'> 
                            <div className=" rounded-lg border border-red-600 text-center overflow-hidden">
                                <div className='px-6 py-4'>
                                    <img src={model.image} alt={model.name} className="w-full h-100 object-cover rounded-t-lg"/>                            
                                    <p className='text-red-600 text-sm mt-2'>Series: {model.description}</p>
                                    <h1 className='text-gray-800 text-2xl hover:underline cursor-pointer mt-1'>{model.name}</h1>
                                    <p className='text-gray-500 text-sm mt-2'>Price: {model.price}</p>
                                </div>
                                <div className='border-t border-gray-200 flex px-8 py-2 space-x-2'>
                                    <button className='bg-white text-red-600 w-1/2 py-1 rounded hover:bg-red-600 hover:text-white  transition duration-300'>View :)</button>
                                    <button className='bg-white text-red-600 w-1/2 py-1 rounded hover:bg-red-600 hover:text-white  transition duration-300'>Add +</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
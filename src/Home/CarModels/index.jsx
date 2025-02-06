import React, {useState} from 'react';
import axios from "../../api/axios";

export default function Models(){

    const [models, setModels] = useState([ 
        {
            id: 1,
            name: "2017 Camaro ZL1",
            description: "Muscle Mania 5/10",
            price: "$10",
            image: "img/camaro.jpg"
        },
        {
            id: 2,
            name: "Model 2",
            description: "Description for Model 2",
            price: "$20",
            image: "img/camaro.jpg"
        },
        {
            id: 3,
            name: "Model 3",
            description: "Description for Model 3",
            price: "$30",
            image: "img/camaro.jpg"
        },{
            id: 4,
            name: "Model 4",
            description: "Description for Model 4",
            price: "$10",
            image: "img/camaro.jpg"
        },{
            id: 5,
            name: "Model 5",
            description: "Description for Model 5",
            price: "$10",
            image: "img/camaro.jpg"
        },{
            id: 6,
            name: "Model 6",
            description: "Description for Model 6",
            price: "$10",
            image: "img/camaro.jpg"
        },

    ]);
    
    // const getModels = async (e) =>{
    //     try {
    //         const response = await axios.get('/models');
    //         setModels(response.data);
    //         console.log(response);
    //     } catch (error){
    //         console.error(error);
    //     }
    // }


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
        <section className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
            <div className="bg-white p-4 rounded-lg shadow-sm col-span-1">
                <h1 className='text-2xl'>Filters</h1>
                <hr/> 
                
            </div>
            <div className="bg-gray-100 col-span-3 space-y-10">
                <div className="flex flex-row justify-between items-center space-x-4">
                <input 
                    id="searchModelInput"
                    // value={searchModelInput}
                    // onChange={(e) => setSearchModelInput(e.target.value)}
                    type="text" 
                    autoComplete="off" 
                    placeholder="Search for a model" 
                    className="w-full py-2 px-4 border focus:outline-none focus:border-red-600 border-gray-300 rounded-full" 
                />
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
                       <div key={model.id} className="bg-white rounded-lg shadow-md w-full text-center overflow-hidden">
                        <div className='px-6 py-4'>
                            <img src={model.image} alt={model.name} className="w-full h-100 object-cover rounded-t-lg"/>                            
                            <p className='text-red-600 text-sm mt-2'>Series: {model.description}</p>
                            <h1 className='text-gray-800 text-xl hover:underline cursor-pointer mt-1'>{model.name}</h1>
                            <p className='text-gray-500 text-sm mt-2'>Price: {model.price}</p>
                        </div>
                        <div className='border-t border-gray-200 flex px-8 py-2 space-x-2'>
                            <button className='bg-white text-red-600 w-1/2 py-1 rounded hover:bg-red-600 hover:text-white  transition duration-300'>View :)</button>
                            <button className='bg-white text-red-600 w-1/2 py-1 rounded hover:bg-red-600 hover:text-white  transition duration-300'>Add +</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
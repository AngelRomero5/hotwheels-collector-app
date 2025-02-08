import React, {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import axios from "../../api/axios";

// Components
import CarCard from './CarCard';
import NewCarForm from './NewCarForm';

export default function Models(){

    // Filters
    const [seriesFilter, setSeriesFilter] = useState([]);
    const [makeFilter, setMakeFilter] = useState([]);
    const [modelFilter, setModelFilter] = useState([]);
    const [yearFilter, setYearFilter] = useState([]);
    const [priceFilter, setPriceFilter] = useState([]);

    const [searchModelInput, setSearchModelInput] = useState('');

    // Errror handling
    const [error, setError] = useState(null);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);  
    const [totalPages, setTotalPages] = useState(1);    
    const itemsPerPage = 25;

    // Models' data
    const [models, setModels] = useState([]);

    // Other components
    const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);

    useEffect(() => {
        const fetchModels = async () => {
            try {
                const response = await axios.get('/models', {
                    params: {
                        page: currentPage,
                        limit: itemsPerPage,
                        name: searchModelInput,
                    }
                });
                
                setModels(response.data.models);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                setError(error);
                console.error(error);
            }
        };
        fetchModels();
    }, [currentPage, searchModelInput]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1);
    };

    const handleCreateButtonClick = () => {
        isCreateModalVisible ? setIsCreateModalVisible(false) : setIsCreateModalVisible(true);
    };
    const handleViewModalClick = () => {
        isViewModalVisible ? setIsViewModalVisible(false) : setIsViewModalVisible(true);
    };


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
        </section>
        <section className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
            <div className="bg-white p-4 rounded-lg shadow-sm col-span-1">
                <div className='p-2 border border-red-600 rounded-lg'>

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
                        <select name="models" id="models" className="w-full px-4 border focus:outline-none focus:border-red-600 border-gray-300 rounded-lg">
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
            </div>
            <div className="bg-gray-100 col-span-3 space-y-10">
                <div className="flex flex-row justify-between items-center space-x-4">
                    <div className="relative w-full">
                        <input 
                            id="searchModelInput"
                            value={searchModelInput}
                            onChange={(e) => setSearchModelInput(e.target.value)}
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
                    <button className='border rounded-lg bg-white border-blue-600 text-blue-600 px-2 py-1 hover:bg-blue-600 hover:text-white transition duration-300'
                            onClick={handleCreateButtonClick}>Create
                    </button>
                    <p className='whitespace-nowrap'>Sort by: </p>
                        <select className='border border-blue-600 rounded-lg px-2 py-1 text-blue-600 focus:outline-none focus:border-blue-600'>
                            <option value="AZ">A-Z</option>
                            <option value="ZA">Z-A</option>
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="price">Price</option>
                        </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {error && <p className='text-red-600 text-center bg-red-200'>{error.message}</p>}
                    {models.map((model) => (
                        <div key={model.id} className='p-2 bg-white border border-red-600 rounded-lg shadow-md w-full'> 
                            <div className="rounded-lg  text-center overflow-hidden">
                                <div className='px-6 py-4'>
                                    <img src={model.image} alt={model.name} className="w-full h-100 object-cover rounded-lg"/>                            
                                    <p className='text-red-600 text-sm mt-2'>Series: {model.description}</p>
                                    <h1 className='text-gray-800 text-2xl hover:underline cursor-pointer mt-1'>{model.name}</h1>
                                    <p className='text-gray-500 text-sm mt-2'>Price: {model.price}</p>
                                </div>
                                <div className='bg-white border-t border-red-600 flex flex-row pt-2'>
                                    <button onClick={handleViewModalClick} className='text-blue-500 w-1/2 py-1 rounded hover:text-blue-600 transition duration-300 flex flex-col items-center justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                            <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                            <path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" />
                                        </svg>
                                        <span>View</span>
                                    </button>
                                    <button className='text-red-500 w-1/2 py-1 rounded hover:text-red-600 transition duration-300 flex flex-col items-center justify-center '>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z" clipRule="evenodd" />
                                        </svg>
                                        <span>Add</span>
                                    </button>
                                    <button className='text-green-600 w-1/2 py-1 rounded hover:text-green-500 transition duration-300 flex flex-col items-center justify-center '>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 0 0 1.075.676L10 15.082l5.925 2.844A.75.75 0 0 0 17 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0 0 10 2Z" clipRule="evenodd" />
                                        </svg>
                                        <span>Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>  
            </div>
        </section>
        <div className="flex justify-end pt-6 pr-10 bg-gray-100">
            <ReactPaginate
                previousLabel={'← Previous'}
                nextLabel={'Next →'}
                breakLabel={'...'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={'flex space-x-2'}
                pageClassName={'border px-3 py-2 rounded-md cursor-pointer'}
                activeClassName={'bg-red-600 text-white'}
                previousClassName={'border px-3 py-2 rounded-md cursor-pointer border-red-600 text-red-600'}
                nextClassName={'border px-3 py-2 rounded-md cursor-pointer border-red-600 text-red-600'}
                disabledClassName={'opacity-50 cursor-not-allowed'}
            />
        </div>
        
        <CarCard isVisible={isViewModalVisible} onClose={handleViewModalClick}/>
        <NewCarForm isVisible={isCreateModalVisible} onClose={handleCreateButtonClick}/>
        </>
    );
}

export default function NewCarForm({ isVisible, onClose}) {
    if (!isVisible) return null;

    // const newCar = async (event) => {
    // event.preventDefault();

    // const newCar = {
    //     brand: useRef(),
    //     model: useRef(),
    //     datereleased: useRef(),
    //     sku: useRef(),
    //     price: useRef(),
    //     image: useRef()
    // };

    //     try {
    //         const response = await fetch('http://localhost:3001/api/AddCar', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(newCar),
    //         });

    //         if (!response.ok) {
    //             throw new Error('Failed to add car');
    //         }

    //         const data = await response.json();
    //         console.log('Car added:', data);
    //         alert('Car added successfully!');
    //     } catch (error) {
    //         console.error('Error adding car:', error);
    //         alert('Failed to add car');
    //     }
    // }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-96 rounded overflow-hidden shadow-lg bg-white relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    &times;
                </button>
                <form className="px-6 py-4">
                    {/* Images upload */}
                    <div className="w-full h-64 bg-gray-300 flex flex-col items-center justify-center mb-4">
                        <input type="file" className="mb-2" placeholder="Upload front picture" />
                        <input type="file" placeholder="Upload back picture" />
                    </div>
                    {/* Fields */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="make">
                            Make
                        </label>
                        <input
                            id="make"
                            type="text"
                            placeholder="Enter Make"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
                            Model
                        </label>
                        <input
                            id="model"
                            type="text"
                            placeholder="Enter Model"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            id="price"
                            type="text"
                            placeholder="Enter Price"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="series">
                            Series
                        </label>
                        <input
                            id="series"
                            type="text"
                            placeholder="Enter Series"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
// import React, { useRef } from 'react';


// async function newCar(event) {
//     event.preventDefault();

//     const newCar = {
//         brand: useRef(),
//         model: useRef(),
//         datereleased: useRef(),
//         sku: useRef(),
//         price: useRef(),
//         image: useRef()
//     };

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

// export default function NewCarForm() {
//     return (
//         <section className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
//             <div className="form-title">
//                 <h1 className="text-center text-lg">Add a new car</h1>
//             </div>
//             <form className="space-y-5" onSubmit={newCar}>
//                 <div className="form-group">
//                     <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
//                         Make
//                     </label>
//                     <input
//                         type="text"
//                         id="brand"
//                         name="brand"
//                         ref={brand}
//                         className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
//                         placeholder="Enter car make"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="model" className="block text-sm font-medium text-gray-700">
//                         Model
//                     </label>
//                     <input
//                         type="text"
//                         id="model"
//                         name="model"
//                         ref={model}
//                         className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
//                         placeholder="Enter car model"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="sku" className="block text-sm font-medium text-gray-700">
//                         SKU
//                     </label>
//                     <input
//                         type="text"
//                         id="sku"
//                         name="sku"
//                         ref={sku}
//                         className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
//                         placeholder="Enter model SKU"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="year" className="block text-sm font-medium text-gray-700">
//                         Release Date
//                     </label>
//                     <input
//                         type="date"
//                         id="year"
//                         name="year"
//                         ref={year}
//                         className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
//                         placeholder="Enter car year"
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="image" className="block text-sm font-medium text-gray-700">
//                         Image
//                     </label>
//                     <input
//                         type="file"
//                         id="image"
//                         name="image"
//                         accept="image/*"
//                         ref={ref}
//                         className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3"
//                         placeholder="Upload Car Image"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="w-full bg-blue-500 text-white py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 p-3"
//                 >
//                     Add Car
//                 </button>
//             </form>
//         </section>
//     );
// }
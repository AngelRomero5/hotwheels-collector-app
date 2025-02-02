export default function CardsGrid() {

    return (
        <>
        <section className='flex flex-row justify-around pt-10'>
             <h1 className='text-5xl text-red-700 font-bold'>Models</h1>
             <div className='flex flex-row justify-around pt-10'>
                    <div class="flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        class="w-full max-w-md px-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400"
                    />
                    </div>                
                    <button className="bg-red-500 text-white font-normal py-2 px-4 rounded">Add </button>
                </div>
        </section>
        </>
    );
}
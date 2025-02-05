
export default function CarCard () {
    return(
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full" src="/img/camaro.jpg" alt="Card" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Camaro</div>
                    <p className="text-gray-700 text-base">Hotwheels</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {/* {tags.map((tag, index) => ( */}
                    <span
                        key="1"
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        #tag1
                    </span>
                    {/* ))} */}
                </div>
            </div>
        </>
    );
}
/** Default export. */
export default function Cart() {
    return (
        <section className='p-2 flex flex-col min-h-screen gap-2 text-sm'>
            <h1 className='pb-2'>Cart</h1>
            <ul className='w-full flex flex-col'>
                <li className='inline-flex items-center gap-x-2 py-3 px-4 font-light  odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg '>
                    <div className='flex flex-col sm:flex-row flex-wrap flex-grow'>
                        <p className='flex-grow'>image</p>
                        <p className='flex-grow'>Product title</p>
                        <p className='flex-grow'>90.00</p>
                        <p className='flex-grow text-center sm:text-right'>View Delete</p>
                    </div>
                </li>
                <li className='inline-flex items-center gap-x-2 py-3 px-4 font-light  odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg '>
                    <div className='flex flex-col sm:flex-row flex-wrap flex-grow'>
                        <p className='flex-grow'>image</p>
                        <p className='flex-grow'>Product title</p>
                        <p className='flex-grow'>90.00</p>
                        <p className='flex-grow text-center sm:text-right'>View Delete</p>
                    </div>
                </li>
                <li className='inline-flex items-center gap-x-2 py-3 px-4 font-light  odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg '>
                    <div className='flex flex-col sm:flex-row flex-wrap flex-grow'>
                        <p className='flex-grow'>image</p>
                        <p className='flex-grow'>Product title</p>
                        <p className='flex-grow'>90.00</p>
                        <p className='flex-grow text-center sm:text-right'>View Delete</p>
                    </div>
                </li>
                <li className='inline-flex items-center gap-x-2 py-3 px-4 font-light  odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg '>
                    <div className='flex flex-col sm:flex-row flex-wrap flex-grow'>
                        <p className='flex-grow'>image</p>
                        <p className='flex-grow'>Product title</p>
                        <p className='flex-grow'>90.00</p>
                        <p className='flex-grow text-center sm:text-right'>View Delete</p>
                    </div>
                </li>
                <li className='inline-flex items-center gap-x-2 py-3 px-4 font-light  odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg '>
                    <div className='flex flex-col sm:flex-row flex-wrap flex-grow'>
                        <p className='flex-grow'>image</p>
                        <p className='flex-grow'>Product title</p>
                        <p className='flex-grow'>90.00</p>
                        <p className='flex-grow text-center sm:text-right'>View Delete</p>
                    </div>
                </li>
                <li className='inline-flex items-center gap-x-2 py-3 px-4 font-light  odd:bg-gray-100 bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg '>
                    <div className='flex flex-col sm:flex-row flex-wrap flex-grow'>
                        <p className='flex-grow'>image</p>
                        <p className='flex-grow'>Product title</p>
                        <p className='flex-grow'>90.00</p>
                        <p className='flex-grow text-center sm:text-right'>View Delete</p>
                    </div>
                </li>
            </ul>
            <div className='flex flex-col flex-wrap justify-end'>
                <p className='p-2 text-right font-light'>Sub Total - 500.00 </p>
                <p className='p-2 text-right font-light'>Sale Tax - 12.00 </p>
                <p className='p-2 text-right font-light'>Shipment - 100.00 </p>
                <p className='p-2 text-right'>Grand Total - 612.00</p>
                <button
                    type='button'
                    className='py-3 font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none'>
                    Checkout
                </button>
            </div>
        </section>
    );
}

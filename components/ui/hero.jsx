export default function Hero() {
    return (
        <div className='relative'>
            <div className='relative overflow-hidden w-full min-h-[350px] bg-white rounded-lg'>
                <div className='absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0'>
                    <div className=''>
                        <div className='flex justify-center h-full bg-gray-100 p-6'>
                            <span className='self-center text-4xl transition duration-700'>First slide</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex justify-center h-full bg-gray-200 p-6'>
                            <span className='self-center text-4xl transition duration-700'>Second slide</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex justify-center h-full bg-gray-300 p-6'>
                            <span className='self-center text-4xl transition duration-700'>Third slide</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center absolute bottom-3 start-0 end-0 space-x-2'>
                <span className='w-3 h-3 border border-gray-400 rounded-full cursor-pointer'></span>
                <span className='w-3 h-3 border border-gray-400 rounded-full cursor-pointer'></span>
                <span className='w-3 h-3 border border-gray-400 rounded-full cursor-pointer'></span>
            </div>
        </div>
    );
}

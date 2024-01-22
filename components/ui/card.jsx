/** Vendot. */
import Link from 'next/link';

/** Export default. */
export default function Card() {
    /** Calculate discount. */
    const calculateDiscount = (price, discount) => {
        /** If either price or discount less than zero return price. */
        if (price < 0 || discount < 0) {
            return price;
        }

        /** Calculate discounted price. */
        const discountedPrice = price - (price * discount) / 100;

        /** Return something. */
        return discountedPrice.toFixed(2);
    };

    /** Return something. */
    return (
        <div className='flex-grow w-full sm:w-3/12 md:w-2/12'>
            <Link href='/'>
                <div className='group flex flex-col h-full shadow-sm bg-slate-100 bg-opacity-70 hover:bg-slate-200 cursor-pointer'>
                    <div className='h-52 flex flex-col justify-center items-center bg-amber-500'>
                        <img className='w-full h-full object-fill' src='/img/placeholder.png' />
                    </div>
                    <div className='p-4 md:p-6'>
                        <p className='pb-2 text-sm font-light'>Windows USB Bootable Disk</p>
                        <p className='pb-2 text-sm font-medium'>
                            {calculateDiscount(100.0, 10.0)} <span className='text-xs font-thin text-red-900'>-10%</span>
                        </p>
                        <span className='text-xs font-thin text-slate-700 mr-1'>100.00</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

/** Vendot. */
import Link from 'next/link';

/** Export default. */
export default function ProductItems({ items }) {
    return (
        <div className='flex-grow w-full sm:w-3/12 md:w-2/12 h-6/12'>
            <Link href='/products/usb-bootable-disk'>
                <div className='group flex flex-col h-full shadow-sm bg-slate-100 bg-opacity-70 hover:bg-slate-200 cursor-pointer'>
                    <div className='h-52 flex flex-col justify-center items-center bg-amber-500'>
                        <img className='w-full h-full object-fill' src='/img/placeholder.png' />
                    </div>
                    <div className='p-4 md:p-6'>
                        <p className='text-sm font-light'>USB Bootable Disk</p>
                        <p className='text-sm font-medium'>90.00</p>
                        <span className='text-xs font-thin text-slate-700 mr-1'>100.00</span>
                        <span className='text-xs font-thin text-red-900'>-10%</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

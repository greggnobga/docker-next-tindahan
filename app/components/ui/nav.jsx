/** Vendor. */
import Link from 'next/link';

/** Component. */
import Sprite from './sprite';

/** Default export. */
export default function Nav() {
    /** Return something. */
    return (
        <nav className='w-full flex flex-row justify-between'>
            <div className='flex flex-row place-items-center w-full sm:w-9/12'>
                <Link className='mx-4 w-1/12 sm:w-2/12 md:4/12 text-gray-200' href='#'>
                    <Sprite id='store' /> <span className='hidden sm:inline-block text-xs sm:text-sm md:text-lg font-medium'>Tindahan</span>
                </Link>
                <input type='text' className='py-2 px-2 w-full block border-gray-200 rounded-lg text-sm focus:border-slate-500 focus:outline-none' placeholder='Search' />
            </div>
            <div className='flex flex-row place-items-center mr-4 text-slate-200'>
                <div className='mx-2 mt-1'>
                    <Sprite id='user' />
                </div>
                <div className='relative cursor-pointer'>
                    <Sprite id='cart' />
                    <span className='absolute -right-1 -top-2 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs leading-tight text-center'>3</span>
                </div>
            </div>
        </nav>
    );
}

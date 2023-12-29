/** Next. */
import Link from 'next/link';

/** Components. */
import Sprite from './sprite';

export default function Footer() {
    return (
        <footer className='bg-amber-700 text-slate-200 text-xs'>
            <div className='p-2 grid grid-cols-1 sm:grid-cols-3'>
                <div className='p-2 font-thin text-sm w-full'>
                    <h1 className='uppercase'>
                        <span className='text-slate-200'>/</span> Follow Us
                    </h1>
                    <hr className='w-full h-px my-1 bg-gray-200 border-0 dark:bg-slate-200 dark:bg-opacity-20' />
                    <Link href='/'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='home' /> Facebook
                        </span>
                    </Link>
                    <Link href='/project'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='project' /> Twitter
                        </span>
                    </Link>
                    <Link href='/about'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='about' /> Tiktok
                        </span>
                    </Link>
                    <Link href='/contact'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='contact' /> Instagram
                        </span>
                    </Link>
                    <Link href='/login'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='login' /> Threads
                        </span>
                    </Link>
                </div>
                <div className='p-2 font-thin text-sm w-full'>
                    <h1 className='uppercase'>
                        <span className='text-slate-200'>/</span> Delivery Services
                    </h1>
                    <hr className='w-full h-px my-1 bg-gray-200 border-0 dark:bg-slate-200 dark:bg-opacity-20' />
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='google' /> LBC Express
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='facebook' /> DHL Express
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='instagram' /> J&T Express
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='twitter' /> Grab Express
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='linked' /> XDE Logistics
                        </span>
                    </Link>
                </div>
                <div className='p-2 font-thin text-sm w-full h-[25vh] sm:=h-full'>
                    <h1 className='uppercase'>
                        <span className='text-slate-200'>/</span> Payment Methods
                    </h1>
                    <hr className='w-full h-px my-1 bg-gray-200 border-0 dark:bg-slate-200 dark:bg-opacity-20' />
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='linked' /> GCASH
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='linked' /> MAYA
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='linked' /> UBP
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='linked' /> CIMB
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='linked' /> PALAWAN
                        </span>
                    </Link>
                </div>
            </div>
            <div className='w-full text-center text-[.50rem] pb-0.5 font-thin'>All rights reserved. San Jose Del Monte, Bulacan, Philippines.</div>
        </footer>
    );
}

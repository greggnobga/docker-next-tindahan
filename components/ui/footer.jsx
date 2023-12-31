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
                        <Sprite id='follow' /> Follow Us
                    </h1>
                    <hr className='w-full h-px my-1 bg-gray-200 border-0 dark:bg-slate-200 dark:bg-opacity-20' />
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='facebook' /> Facebook
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='twitter' /> Twitter
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='tiktok' /> Tiktok
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='instagram' /> Instagram
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='linkedin' /> Linkedin
                        </span>
                    </Link>
                </div>
                <div className='p-2 font-thin text-sm w-full'>
                    <h1 className='uppercase'>
                        <Sprite id='delivery' /> Delivery Services
                    </h1>
                    <hr className='w-full h-px my-1 bg-gray-200 border-0 dark:bg-slate-200 dark:bg-opacity-20' />
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='airplane' /> LBC Express
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='airplane' /> DHL Express
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='airplane' /> J&T Express
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='airplane' /> Grab Express
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='airplane' /> XDE Logistics
                        </span>
                    </Link>
                </div>
                <div className='p-2 font-thin text-sm w-full h-[25vh] sm:=h-full'>
                    <h1 className='uppercase'>
                        <Sprite id='payment' />
                        Payment Methods
                    </h1>
                    <hr className='w-full h-px my-1 bg-gray-200 border-0 dark:bg-slate-200 dark:bg-opacity-20' />
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='wallet' /> GCASH
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='wallet' /> MAYA
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='wallet' /> UBP
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='wallet' /> CIMB
                        </span>
                    </Link>
                    <Link href='#'>
                        <span className='py-2 w-full block border-b border-slate-200 border-opacity-20'>
                            <Sprite id='wallet' /> PALAWAN
                        </span>
                    </Link>
                </div>
            </div>
            <div className='w-full text-center text-[.50rem] pb-0.5 font-thin'>All rights reserved. San Jose Del Monte, Bulacan, Philippines.</div>
        </footer>
    );
}

'use client';

/** Vendor. */
import Link from 'next/link';

/** Components. */
import Sprite from '../ui/sprite';

/** Default export. */
export default function ProfileUpdate() {
    /** Return something. */
    return (
        <>
            <div className='relative w-full h-16'>
                <Link href='/profile' className='absolute top-0 right-0 p-2 text-right text-sm bg-slate-200 rounded shadow-sm'>
                    <Sprite id='chevron-back' /> Back
                </Link>
            </div>

            <form method='POST' className='bg-slate-200 p-4 rounded'>
                <div className='grid grid-cols-12 gap-6 mb-6'>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='email' className='block mb-2 text-sm font-light text-gray-900'>
                            Firstname
                        </label>
                        <input className='input-success' />
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            Lastname
                        </label>
                        <input className='input-success' />
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            Image
                        </label>
                        <input className='input-success' />
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            Slug
                        </label>
                        <input className='input-success' />
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            Mobile
                        </label>
                        <input className='input-success' />
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            Gender
                        </label>
                        <input className='input-success' />
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            Password
                        </label>
                        <input className='input-success' />
                    </div>
                    <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            Confirm Password
                        </label>
                        <input className='input-success' />
                    </div>
                    <div className='col-span-12'>
                        <button type='submit' className='button-primary'>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

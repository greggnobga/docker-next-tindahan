'use client';

/** Vendor. */
import Link from 'next/link';

/** Default export. */
export default function Signup() {
    return (
        <div className='min-h-screen'>
            <h1 className='pb-2 text-center'>Signup</h1>

            <form className='bg-slate-200 p-2 rounded'>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                        <label htmlFor='firstname' className='block mb-2 text-sm font-light text-gray-900'>
                            First Name
                        </label>
                        <input
                            type='text'
                            id='firstname'
                            className='bg-slate-100 border border-slate-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none'
                            placeholder='Firstname'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='lastname' className='block mb-2 text-sm font-light text-gray-900'>
                            Last Name
                        </label>
                        <input
                            type='text'
                            id='lastname'
                            className='bg-slate-100 border border-slate-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none'
                            placeholder='Lastname'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm font-light text-gray-900'>
                            Email Address
                        </label>
                        <input
                            type='text'
                            id='email'
                            className='bg-slate-100 border border-slate-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none'
                            placeholder='Email'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='phone' className='block mb-2 text-sm font-light text-gray-900'>
                            Mobile Number
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            className='bg-slate-100 border border-slate-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none'
                            placeholder='1234-5678-910'
                            pattern='[0-9]{4}-[0-9]{2}-[0-9]{4}'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='username' className='block mb-2 text-sm font-light text-gray-900'>
                            Username
                        </label>
                        <input
                            type='text'
                            id='username'
                            className='bg-slate-100 border border-slate-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none'
                            placeholder='Username'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='block mb-2 text-sm font-light text-gray-900'>
                            Password
                        </label>
                        <input
                            type='password'
                            id='username'
                            className='bg-slate-100 border border-slate-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none'
                            placeholder='Password'
                            required
                        />
                    </div>
                    <p className='text-xs font-thin'>
                        Already have an account? Proceed to{' '}
                        <Link href='/login' className='text-amber-500'>
                            login
                        </Link>{' '}
                        page
                    </p>
                    <button
                        type='submit'
                        className='text-slate-300 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800'>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

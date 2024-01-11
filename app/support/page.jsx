'use client';

/** Default export. */
export default function Support() {
    return (
        <div className='min-h-screen'>
            <h1 className='pb-2 text-center'>Support</h1>

            <form className='bg-slate-200 p-2 rounded'>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                        <label htmlFor='fullname' className='block mb-2 text-sm font-light text-gray-900'>
                            Full Name
                        </label>
                        <input
                            type='text'
                            id='fullname'
                            className='bg-slate-100 border border-slate-400 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:outline-none'
                            placeholder='Full Name'
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
                            placeholder='Email Address'
                            required
                        />
                    </div>
                    <div className='md:col-span-2'>
                        <label for='message' class='block mb-2 text-sm font-light text-gray-900'>
                            Your message
                        </label>
                        <textarea
                            id='message'
                            rows='4'
                            className='bg-slate-100 border border-slate-400 text-gray-900 text-sm font-thin rounded-lg block w-full p-2.5 focus:outline-none'
                            placeholder='Write your concerns here...'></textarea>
                    </div>
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

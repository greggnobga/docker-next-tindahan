/** Vendor. */
import Link from 'next/link';

/** Components. */
import Sprite from './sprite';

/** Export default. */
export default function Paginate({ page, pages, handler, type, keyword }) {
    /** if pages is equl to one, return nothing. */
    if (pages === 1) {
        return;
    }

    /** Return something. */
    return (
        <nav className='pt-4 flex justify-center items-center gap-x-1'>
            <button
                type='button'
                className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
                onClick={() => {
                    page != 0 ? handler(page - 1) : '';
                }}>
                <span className='flex-shrink-0 w-3.5 h-3.5'>
                    <Sprite id='chevron-back' />
                </span>
                <span aria-hidden='true' className='sr-only'>
                    Previous
                </span>
            </button>
            <div className='flex items-center gap-x-1'>
                {[...Array(pages).keys()].map((x) => {
                    return (
                        <Link
                            href={type === 'search' ? `/${type}?term=${keyword}&page=${x + 1}` : `/${type}?page=${x + 1}`}
                            key={x + 1}
                            type='button'
                            className={`min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none ${
                                x + 1 === page ? 'bg-amber-600 text-slate-200' : 'bg-gray-200 text-gray-800'
                            }`}
                            onClick={() => {
                                handler(x + 1);
                            }}>
                            {x + 1}
                        </Link>
                    );
                })}
            </div>
            <button
                type='button'
                className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none'
                onClick={() => {
                    page < pages ? handler(page + 1) : '';
                }}>
                <span aria-hidden='true' className='sr-only'>
                    Next
                </span>
                <span className='flex-shrink-0 w-3.5 h-3.5'>
                    <Sprite id='chevron-forward' />
                </span>
            </button>
        </nav>
    );
}

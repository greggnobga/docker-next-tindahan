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
            <span className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-300  focus:outline-none  disabled:opacity-50 disabled:pointer-events-none'>
                <Sprite id='chevron-back' />
            </span>
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

            <span className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-lg text-gray-300 focus:outline-none  disabled:opacity-50 disabled:pointer-events-none'>
                <Sprite id='chevron-forward' />
            </span>
        </nav>
    );
}

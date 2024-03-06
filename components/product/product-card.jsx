/** Vendor. */
import Link from 'next/link';

/** Library. */
import { calculateDiscount } from '../../lib/calculate';

/** Components. */
import Rating from '../ui/rating';

/** Export default. */
export default function Card({ item }) {
    /** Return something. */
    return (
        <div className='flex-grow w-full h-fit sm:w-3/12 md:w-2/12'>
            <Link href={`/product/${item.slug}`}>
                <div className='flex flex-col h-full shadow-sm bg-slate-100 bg-opacity-70 hover:bg-slate-200 cursor-pointer'>
                    <div className='h-52 flex flex-col justify-center items-center bg-amber-500'>
                        <img className='w-full h-full object-fill' src={item.image} />
                    </div>
                    <div className='p-2 md:p-4'>
                        <p className='pb-2 text-sm font-light text-amber-600'>{item.name}</p>
                        <p className='pb-2 text-sm font-medium'>
                            <span className='text-lg pr-2'>&#x20B1;{calculateDiscount({ price: item.price, discount: item.discount })}</span>
                            <span className='text-xs font-thin text-red-900'>-{item.discount}%</span>
                        </p>
                        <p className='pb-2 text-xs font-thin text-slate-700 mr-1'>
                            {Number(item.price).toLocaleString('en-US', { minimumFractionDigits: 2 })} <span className='uppercase'>( old price )</span>
                        </p>
                        <div className='pb-2 text-xs font-light'>
                            <Rating value={item.rating} text={`${item.reviewcount} ${item.reviewcount > 1 ? 'reviews' : 'review'}`} />
                        </div>
                        <p className='pt-2 text-xs font-thin text-right'>
                            <span className='uppercase'>Stock on hand ( {item.stockcount} )</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

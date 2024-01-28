/** Vendor. */
import Link from 'next/link';

/** Components. */
import Rating from '../ui/rating';

/** Export default. */
export default function ProductCard({ item }) {
    /** Calculate discount. */
    const calculateDiscount = (price, discount) => {
        /** If either price or discount less than zero return price. */
        if (price < 0 || discount < 0) {
            return price;
        }

        /** Calculate discounted price. */
        const discountedPrice = price - (price * discount) / 100;

        /** Return something. */
        return discountedPrice.toFixed(2);
    };

    /** Return something. */
    return (
        <div className='flex-grow w-full h-fit sm:w-3/12 md:w-2/12'>
            <Link href={`/products/${item.slug}`}>
                <div className='group flex flex-col h-full shadow-sm bg-slate-100 bg-opacity-70 hover:bg-slate-200 cursor-pointer'>
                    <div className='h-52 flex flex-col justify-center items-center bg-amber-500'>
                        <img className='w-full h-full object-fill' src={item.image} />
                    </div>
                    <div className='p-2 md:p-4'>
                        <p className='pb-2 text-sm font-light text-amber-600'>{item.name}</p>
                        <p className='pb-2 text-sm font-medium'>
                            <span className='text-lg'>&#x20B1; {calculateDiscount(item.price, item.discount)}</span>{' '}
                            <span className='text-xs font-thin text-red-900'>-{item.discount}%</span>
                        </p>
                        <p className='pb-2 text-xs font-thin text-slate-700 mr-1'>
                            {item.price} <span className='uppercase'>( old price )</span>
                        </p>
                        <p className='pb-2 text-xs font-light'>
                            <Rating value={item.rating} text={`${item.reviewcount} ${item.reviewcount > 1 ? 'reviews' : 'review'}`} />
                        </p>
                        <p className='pt-2 text-xs font-thin text-right'>
                            <span className='uppercase'>Stock on hand ( {item.stockcount} )</span>
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

/** Vendor. */
import dynamic from 'next/dynamic';

/** Library. */
import { calculateDiscount } from '../../../lib/calculate';

/** Components. */
const Rating = dynamic(() => import('../../../components/ui/rating'), { ssr: false });
const ProductStock = dynamic(() => import('../../../components/product/product-stock'), { ssr: false });
const ProductRecommend = dynamic(() => import('../../../components/product/product-recommend'), { ssr: false });

/** Get project details for server side rendering. */
export async function getDetails({ slug }) {
    /** Get data from api. */
    const details = await fetch(`${process.env.HOST}/api/product/${slug}`, { cache: 'no-store' }).then((data) => data.json());

    /** Return something. */
    return details ? details : {};
}

/** Default export. */
export default async function ProductDetail({ params }) {
    /** Gert parametr value. */
    const { slug } = await params;

    /** Featch project details. */
    const details = await getDetails({ slug });

    /** Return something. */
    return (
        <section className='min-h-screen p-2 flex flex-col sm:flex-row flex-wrap gap-4'>
            <div className='w-full h-full sm:w-2/12 flex-grow'>
                <img className='w-full h-full object-fill' src={details.image} alt='Placeholder' />
            </div>
            <div className='w-full sm:w-8/12 flex-grow'>
                <div className='py-2 w-full h-4/12 md:h-4/12'>
                    <p className='pb-2 text-md font-medium'>{details.name}</p>
                    <p className='text-sm font-medium'>
                        <span className='text-lg'>&#x20B1; {calculateDiscount({ price: details.price, discount: details.discount })}</span>{' '}
                        <span className='text-xs font-thin text-red-900'>-{details.discount}%</span>
                    </p>
                    <p className='py-2 text-xs font-thin text-slate-700 mr-1'>
                        {details.price} <span className='uppercase'>( old price )</span>
                    </p>
                    <p className='text-xs font-light'>
                        <Rating value={details.rating} text={`${details.reviewcount} ${details.reviewcount > 1 ? 'reviews' : 'review'}`} />
                    </p>
                </div>
                <div className='py-2 w-full h-4/12 md:h-6/12'>
                    <p className='text-sm font-light'>{details.description}</p>
                </div>
                <ProductStock stocks={details.stockcount} slug={details.slug} />
            </div>
            <ProductRecommend />
        </section>
    );
}

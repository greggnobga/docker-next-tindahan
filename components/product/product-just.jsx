'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { justProduct } from '../../redux/actions/product-actions';

/** Component.  */
import Loader from '../ui/loader';
import ProductCard from './product-card';

export default function ProductJust() {
    /** Use selector. */
    const productJust = useSelector((state) => state.productJust);
    const { products } = productJust;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        /** Fetch just products. */
        if (!products) {
            dispatch(justProduct());
        }
    }, [dispatch]);

    /** Return something. */
    return (
        <div className='pt-2 w-full'>
            <h1 className='pb-2'>Just For You</h1>
            <div className='flex flex-col flex-wrap sm:flex-row gap-2 place-items-center'>
                {products ? (
                    products.map((product, id) => {
                        return <ProductCard key={id} item={product} />;
                    })
                ) : (
                    <div className='w-full text-center'>
                        <Loader />
                    </div>
                )}
            </div>
        </div>
    );
}

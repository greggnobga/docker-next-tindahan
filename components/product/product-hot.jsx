'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { hotProduct } from '../../redux/actions/product-actions';

/** Component.  */
import Loader from '../ui/loader';
import ProductCard from './product-card';

export default function ProductHot() {
    /** Use selector. */
    const productHot = useSelector((state) => state.productHot);
    const { products } = productHot;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        /** Fetch hot products. */
        if (!products) {
            dispatch(hotProduct());
        }
    }, [dispatch]);

    /** Return something. */
    return (
        <div className='pt-2 w-full'>
            <h1 className='pb-2'>Hot Deals</h1>
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

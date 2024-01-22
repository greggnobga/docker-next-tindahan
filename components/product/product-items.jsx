'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { productList } from '../../redux/actions/product-actions';

/** Component.  */
import Loader from '../ui/loader';
import ProductCard from './product-card';

export default function ProductItems() {
    /** Use selector. */
    const listProduct = useSelector((state) => state.listProduct);
    const { products } = listProduct;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        if (!products) {
            /** Fetch featured projects. */
            dispatch(productList());
        }
    }, [dispatch, products]);

    /** Return something. */
    return (
        <div className='pt-2 w-full'>
            <h1 className='pb-2'>Products</h1>
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

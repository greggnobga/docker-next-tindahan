'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { listProduct } from '../../redux/actions/product-actions';

/** Component.  */
import Loader from '../ui/loader';
import Paginate from '../ui/paginate';
import ProductCard from './product-card';

export default function Container() {
    /** Use selector. */
    const productList = useSelector((state) => state.productList);
    const { products, pages, page } = productList;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        /** Fetch featured projects. */
        if (!products) {
            dispatch(listProduct());
        }
    }, [dispatch]);

    /** Pagination handler. */
    const paginationHandler = (x) => {
        /** Dispatch action when pagination has been clicked. */
        dispatch(listProduct(x));
    };

    /** Return something. */
    return (
        <>
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
            <div className='w-full'>
                <Paginate pages={pages} handler={paginationHandler} page={page} type='product' />
            </div>
        </>
    );
}

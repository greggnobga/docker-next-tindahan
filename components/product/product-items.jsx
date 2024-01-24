'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { productList } from '../../redux/actions/product-actions';

/** Component.  */
import Loader from '../ui/loader';
import Paginate from '../ui/paginate';
import ProductCard from './product-card';

export default function ProductItems() {
    /** Use search params. */
    const searchParams = useSearchParams();
    const pageNumber = searchParams.get('page');

    /** Use selector. */
    const listProduct = useSelector((state) => state.listProduct);
    const { products, pages, page } = listProduct;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        /** Fetch featured projects. */
        dispatch(productList());
    }, [dispatch]);

    /** Pagination handler. */
    const paginationHandler = (x) => {
        /** Dispatch action when pagination has been clicked. */
        dispatch(productList(x));
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
            <div>
                <Paginate pages={pages} handler={paginationHandler} page={page} />
            </div>
        </>
    );
}

'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import { useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { productSearch } from '../../redux/actions/product-actions';

/** Component.  */
import Loader from '../ui/loader';
import Paginate from '../ui/paginate';
import ProductCard from './product-card';

export default function ProductSearch() {
    /** Use search params. */
    const searchParams = useSearchParams();
    const keyword = searchParams.get('term');
    const pageNumber = searchParams.get('page');

    /** Use selector. */
    const searchProduct = useSelector((state) => state.searchProduct);
    const { products, pages, page } = searchProduct;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use effect. */
    useEffect(() => {
        /** Fetch featured projects. */
        dispatch(productSearch(keyword, pageNumber));
    }, [dispatch, keyword]);

    /** Pagination handler. */
    const paginationHandler = (pageNumber) => {
        /** Dispatch action when pagination has been clicked. */
        dispatch(productSearch(keyword, pageNumber));
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
                <Paginate pages={pages} handler={paginationHandler} page={page} type='search' keyword={keyword} />
            </div>
        </>
    );
}

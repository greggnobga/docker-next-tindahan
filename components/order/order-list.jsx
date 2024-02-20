'use client';

/** React. */
import { useEffect } from 'react';

/** Vendor. */
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

/** Action. */
import { listOrder } from '../../redux/actions/order-actions';

/** Component.  */
import Paginate from '../ui/paginate';

/** Default export. */
export default function Orders() {
    /** Use selector. */
    const userLogin = useSelector((state) => state.userLogin);
    const { logged } = userLogin;

    const orderList = useSelector((state) => state.orderList);
    const { orders, page, pages, size } = orderList;

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** Dispatch orders. */
        dispatch(listOrder());

        /** Check logged. */
        if (!logged) {
            router.push('/login?redirect=shipping');
        }
    }, [logged]);

    /** Pagination handler. */
    const paginationHandler = (x) => {
        console.log(x);
        /** Dispatch action when pagination has been clicked. */
        dispatch(listOrder(x));
    };

    /** Use search params. */
    const searchParams = useSearchParams();
    const number = searchParams.get('page');

    /** Return something. */
    return (
        <div className='flex flex-col flex-wrap sm:flex-row gap-2 place-items-center'>
            <div className='p-2 w-full grid grid-cols-1 sm:grid-cols-12 border-b border-slate-300 border-opacity-50'>
                <p className='col-span-1 hidden sm:block text-sm'>Index</p>
                <p className='col-span-6 hidden sm:block text-sm'>Order</p>
                <p className='col-span-1 hidden sm:block text-sm'>Items</p>
                <p className='col-span-1 hidden sm:block text-sm'>Paid</p>
                <p className='col-span-1 hidden sm:block text-sm'>Delivered</p>
                <p className='col-span-2 hidden sm:block text-sm text-center'>Date</p>
            </div>
            {orders &&
                orders.map((item, keys) => {
                    return (
                        <div key={keys} className='p-2 w-full grid grid-cols-1 sm:grid-cols-12 border-b border-slate-300 border-opacity-50'>
                            <p className='p-1 relative sm:col-span-1 font-light text-sm'>
                                <span className='absolute block top-0 right-0 text-[.50rem] sm:hidden'>Index</span>
                                {number <= 1 ? keys + 1 : keys + size + 1}
                            </p>
                            <p className='p-1 relative sm:col-span-6 font-light text-sm'>
                                <span className='absolute block top-0 right-0 text-[.50rem] sm:hidden'>Order</span>
                                <Link href={`/orders/${item._id}`} className='hover:text-amber-600'>
                                    {item._id}
                                </Link>
                            </p>
                            <p className='p-1 relative sm:col-span-1 font-light text-sm'>
                                <span className='absolute block top-0 right-0 text-[.50rem] sm:hidden'>Items</span>
                                {item.orderitems.length}
                            </p>
                            <p className='p-1 relative sm:col-span-1 font-light text-sm'>
                                <span className='absolute block top-0 right-0 text-[.50rem] sm:hidden'>Paid</span>
                                {item.ispaid ? 'Yes' : 'No'}
                            </p>
                            <p className='p-1 relative sm:col-span-1 font-light text-sm'>
                                <span className='absolute block top-0 right-0 text-[.50rem] sm:hidden'>Delivered</span>
                                {item.isdelivered ? 'Yes' : 'No'}
                            </p>
                            <p className='p-1 relative sm:col-span-2 font-light text-sm text-center'>
                                <span className='absolute block top-0 right-0 text-[.50rem] sm:hidden'>Date</span>
                                {item.createdAt.substring(0, 10)}
                            </p>
                        </div>
                    );
                })}

            <div className='w-full'>
                <Paginate pages={pages} handler={paginationHandler} page={page} type='profile' />
            </div>
        </div>
    );
}

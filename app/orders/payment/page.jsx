/** Vendor. */
import dynamic from 'next/dynamic';

/** Library. */
import { paymentDetails } from '../../../lib/payment';

/** Components. */
const OrderPayment = dynamic(() => import('../../../components/order/order-payment'), { ssr: false });

/** Default export. */
export default async function OrderPage({ searchParams }) {
    /** Deconstruct search params. */
    const { order, method } = searchParams;

    /** Fetch payment details. */
    const payment = await paymentDetails({ method });

    if (method === 'crypto') {
        /** Return something. */
        return (
            <section className='min-h-screen'>
                <h1 className='pb-4 uppercase'>Payment {order ? order : ''}</h1>
                <div className='grid grid-cols-1 sm:grid-cols-4 bg-slate-200 rounded'>
                    <div className='col-span-1 sm:col-span-4 p-2'>
                        <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2 uppercase'>Send Payment</h1>
                        <p className='py-2 text-sm font-normal uppercase'>Payment Method: {payment ? payment.method : ''}</p>
                        <p className='py-2 text-sm font-normal'>XRP: {payment ? payment.xrp : ''}</p>
                        <p className='py-2 text-sm font-normal'>XLM: {payment ? payment.xlm : ''}</p>
                        <p className='text-xs font-thin'>
                            Please deposit the equal amount of crypto against your order balance to the XRP or XLM addresses shown above. Please ensure that you copy and paste the
                            address correctly; any block chain transaction is irreversible.
                            <span className='pl-1 text-red-500'>Incorrect payments will not be refunded.</span>
                        </p>
                    </div>
                    <OrderPayment order={order ? order : ''} method={method ? method : ''} />
                </div>
            </section>
        );
    } else {
        /** Return something. */
        return (
            <section className='min-h-screen'>
                <h1 className='pb-4 uppercase'>Payment {order ? order : ''}</h1>
                <div className='grid grid-cols-1 sm:grid-cols-4 bg-slate-200 rounded'>
                    <div className='col-span-1 sm:col-span-4 p-2'>
                        <h1 className='font-thin text-sm border-b border-slate-300 border-opacity-70 pb-2 uppercase'>Send Payment</h1>
                        <p className='py-2 text-sm font-normal uppercase'>Payment Method: {payment ? payment.method : ''}</p>
                        <p className='py-2 text-sm font-normal'>Account: {payment ? payment.owner : ''}</p>
                        <p className='py-2 text-sm font-normal'>Number: {payment ? payment.account : ''}</p>
                        <p className='text-xs font-thin'>
                            Please confirm that the account number is the same as the one displayed above.
                            <span className='pl-1 text-red-500'>Incorrect payments will not be refunded.</span>
                        </p>
                    </div>
                    <OrderPayment order={order ? order : ''} method={method ? method : ''} />
                </div>
            </section>
        );
    }
}

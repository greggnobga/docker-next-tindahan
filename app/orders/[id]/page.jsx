/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const OrderDetails = dynamic(() => import('../../../components/order/order-details'), { ssr: false });

/** Default export. */
export default function OrderDetailsPage({ params }) {
    /** Return something. */
    return (
        <section className='min-h-screen'>
            <h1 className='pb-2 text-left uppercase'>Order {params.id}</h1>
            <OrderDetails order={params.id} />
        </section>
    );
}

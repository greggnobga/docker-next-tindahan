/** Vendor. */
import dynamic from 'next/dynamic';

/** Component. */
const Order = dynamic(() => import('../../../components/cart/cart-order'), { ssr: false });
const Steps = dynamic(() => import('../../../components/cart/cart-steps'), { ssr: false });

/** Default export. */
export default function OrderPage() {
    /** Return something. */
    return (
        <section className='min-h-screen'>
            <Steps login shipping payment order />
            <Order />
        </section>
    );
}

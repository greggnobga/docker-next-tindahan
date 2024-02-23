/** Vendor. */
import dynamic from 'next/dynamic';

/** Component. */
const Payment = dynamic(() => import('../../../components/cart/cart-payment'), { ssr: false });
const Steps = dynamic(() => import('../../../components/cart/cart-steps'), { ssr: false });

/** Default export. */
export default function PaymentPage() {
    /** Return something. */
    return (
        <section className='min-h-screen'>
            <Steps login shipping payment />
            <Payment />
        </section>
    );
}

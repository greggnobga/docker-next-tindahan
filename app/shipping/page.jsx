/** Vendor. */
import dynamic from 'next/dynamic';

/** Component. */
const Container = dynamic(() => import('../../components/checkout/checkout-container'), { ssr: false });

/** Default export. */
export default function ShippingPage() {
    /** Return something. */
    return (
        <div className='min-h-screen'>
            <h1 className='pb-4'>Shipping</h1>
            <Container />
        </div>
    );
}

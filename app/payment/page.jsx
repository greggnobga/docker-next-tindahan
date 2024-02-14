/** Vendor. */
import dynamic from 'next/dynamic';

/** Component. */
const Payment = dynamic(() => import('../../components/checkout/checkout-payment'), { ssr: false });

/** Default export. */
export default function ShippingPage() {
    /** Return something. */
    return (
        <div className='min-h-screen'>
            <h1 className='pb-4'>Payment</h1>
            <Payment />
        </div>
    );
}

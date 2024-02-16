/** Vendor. */
import dynamic from 'next/dynamic';

/** Component. */
const Payment = dynamic(() => import('../../components/checkout/checkout-payment'), { ssr: false });
const Steps = dynamic(() => import('../../components/checkout/checkout-steps'), { ssr: false });

/** Default export. */
export default function PaymentPage() {
    /** Return something. */
    return (
        <div className='min-h-screen'>
            <Steps login shipping payment />
            <Payment />
        </div>
    );
}

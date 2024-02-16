/** Vendor. */
import dynamic from 'next/dynamic';

/** Component. */
const Container = dynamic(() => import('../../components/checkout/checkout-container'), { ssr: false });
const Steps = dynamic(() => import('../../components/checkout/checkout-steps'), { ssr: false });

/** Default export. */
export default function ShippingPage() {
    /** Return something. */
    return (
        <div className='min-h-screen'>
            <Steps login shipping />
            <Container />
        </div>
    );
}

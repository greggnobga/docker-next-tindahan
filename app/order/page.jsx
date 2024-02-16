/** Vendor. */
import dynamic from 'next/dynamic';

/** Component. */
const Order = dynamic(() => import('../../components/checkout/checkout-order'), { ssr: false });
const Steps = dynamic(() => import('../../components/checkout/checkout-steps'), { ssr: false });

/** Default export. */
export default function OrderPage() {
    /** Return something. */
    return (
        <div className='min-h-screen'>
            <Steps login shipping payment order />
            <Order />
        </div>
    );
}

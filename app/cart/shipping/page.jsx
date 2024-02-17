/** Vendor. */
import dynamic from 'next/dynamic';

/** Component. */
const Start = dynamic(() => import('../../../components/cart/cart-start'), { ssr: false });
const Steps = dynamic(() => import('../../../components/cart/cart-steps'), { ssr: false });

/** Default export. */
export default function ShippingPage() {
    /** Return something. */
    return (
        <div className='min-h-screen'>
            <Steps login shipping />
            <Start />
        </div>
    );
}

/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const CartCard = dynamic(() => import('../../components/cart/cart-card'), { ssr: false });

/** Default export. */
export default function Cart() {
    /** Return something.  */
    return (
        <section className='min-h-screen p-2 flex flex-col gap-2 text-sm'>
            <CartCard />
        </section>
    );
}

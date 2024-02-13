/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const Cart = dynamic(() => import('../../components/ui/cart'), { ssr: false });

/** Default export. */
export default function CartPage() {
    /** Return something.  */
    return (
        <section className='min-h-screen p-2 flex flex-col gap-2 text-sm'>
            <Cart />
        </section>
    );
}

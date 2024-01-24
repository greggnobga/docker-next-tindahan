/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const ProductItems = dynamic(() => import('../../components/product/product-items'), { ssr: false });

/** Default export. */
export default function Products() {
    return (
        <section className='min-h-screen p-2 flex flex-col gap-2'>
            <div className='pt-2 w-full'>
                <h1 className='pb-2'>Products</h1>
                <ProductItems />
            </div>
        </section>
    );
}

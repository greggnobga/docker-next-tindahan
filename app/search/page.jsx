/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const ProductSearch = dynamic(() => import('../../components/product/product-search'), { ssr: false });

/** Default export. */
export default function Search() {
    return (
        <section className='min-h-screen p-2 flex flex-col gap-2'>
            <div className='pt-2 w-full'>
                <h1 className='pb-2'>Search Result</h1>
                <ProductSearch />
            </div>
        </section>
    );
}

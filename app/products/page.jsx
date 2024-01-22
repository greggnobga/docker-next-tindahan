/** Components. */
import ProductItems from '../../components/product/product-items';

/** Default export. */
export default function Products() {
    return (
        <section className='min-h-screen p-2 flex flex-col gap-2'>
            <ProductItems />
        </section>
    );
}

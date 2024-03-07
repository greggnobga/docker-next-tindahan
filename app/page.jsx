/** Components. */
import Hero from '../components/ui/hero';
import ProductFlash from '../components/product/product-flash';
import ProductJust from '../components/product/product-just';
import ProductHot from '../components/product/product-hot';
import ProductOur from '../components/product/product-our';

/** Default export. */
export default function HomePage() {
    /** Return something. */
    return (
        <>
            <Hero />
            <section className='min-h-screen p-2 flex flex-col gap-2'>
                <ProductFlash />
                <ProductJust />
                <ProductHot />
                <ProductOur />
            </section>
        </>
    );
}

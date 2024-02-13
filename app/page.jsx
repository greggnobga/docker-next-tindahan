/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const Hero = dynamic(() => import('../components/ui/hero'), { ssr: false });
const ProductFlash = dynamic(() => import('../components/product/product-flash'), { ssr: false });
const ProductJust = dynamic(() => import('../components/product/product-just'), { ssr: false });
const ProductHot = dynamic(() => import('../components/product/product-hot'), { ssr: false });
const ProductOur = dynamic(() => import('../components/product/product-our'), { ssr: false });

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

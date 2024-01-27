/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
import Hero from '../components/ui/hero';
import Container from '../components/ui/container';
import Sprite from '../components/ui/sprite';
const ProductFlash = dynamic(() => import('../components/product/product-flash'), { ssr: false });
const ProductJust = dynamic(() => import('../components/product/product-just'), { ssr: false });
const ProductHot = dynamic(() => import('../components/product/product-hot'), { ssr: false });
const ProductOur = dynamic(() => import('../components/product/product-our'), { ssr: false });

/** Default export. */
export default function Home() {
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

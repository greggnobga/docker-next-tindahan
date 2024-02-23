/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const ProductSlug = dynamic(() => import('../../../components/product/product-slug'), { ssr: false });

/** Get project details for server side rendering. */
export async function getDetails({ slug }) {
    /** Get data from api. */
    const details = await fetch(`${process.env.HOST}/api/product/${slug}`, { cache: 'no-store' }).then((data) => data.json());

    /** Return something. */
    return details ? details : {};
}

/** Default export. */
export default async function ProductDetailsPage({ params }) {
    /** Gert parametr value. */
    const { slug } = await params;

    /** Featch project details. */
    const details = await getDetails({ slug });

    /** Return something. */
    return (
        <section className='min-h-screen p-2 flex flex-col sm:flex-row flex-wrap gap-4'>
            <ProductSlug details={details} />
        </section>
    );
}

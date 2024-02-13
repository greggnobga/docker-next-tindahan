/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const Slug = dynamic(() => import('../../../components/product/product-slug'), { ssr: false });

/** Get project details for server side rendering. */
export async function getDetails({ slug }) {
    /** Get data from api. */
    const details = await fetch(`${process.env.HOST}/api/product/${slug}`, { cache: 'no-store' }).then((data) => data.json());

    /** Return something. */
    return details ? details : {};
}

/** Default export. */
export default async function ProductSlug({ params }) {
    /** Gert parametr value. */
    const { slug } = await params;

    /** Featch project details. */
    const details = await getDetails({ slug });

    /** Return something. */
    return <Slug details={details} />;
}

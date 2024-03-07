/** Component.  */
import ProductCard from './product-card';

/** Get project details for server side rendering. */
export async function getProducts() {
    /** Get data from api. */
    const products = await fetch(`${process.env.HOST}/api/product/deals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deals: 'Hot Deals' }),
    }).then((data) => data.json());

    /** Return something. */
    return products ? products : {};
}

export default async function HotProducts() {
    /** Get flash deals . */
    const { products } = await getProducts();

    /** Return something. */
    return (
        <div className='pt-2 w-full'>
            <h1 className='pb-2'>Hot Deals</h1>
            <div className='flex flex-col flex-wrap sm:flex-row gap-2 place-items-center'>
                {products &&
                    products.map((product, id) => {
                        return <ProductCard key={id} item={product} />;
                    })}
            </div>
        </div>
    );
}

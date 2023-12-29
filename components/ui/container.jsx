/** Component. */
import ProductItems from '../product/items.jsx';

export default function Container({ title, section }) {
    return (
        <div className='pt-2 w-full'>
            <h1 className='pb-2'>{title}</h1>
            <div className='flex flex-col flex-wrap sm:flex-row gap-2'>
                <ProductItems items={section} />
                <ProductItems items={section} />
                <ProductItems items={section} />
                <ProductItems items={section} />
                <ProductItems items={section} />
            </div>
        </div>
    );
}

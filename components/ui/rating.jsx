/** Vendor. */
import Link from 'next/link';

/** Component. */
import Sprite from './sprite';

/** Export default. */
export default function Rating({ value, text }) {
    /** Return something. */
    return (
        <p className='pt-2 text-xs font-thin relative'>
            <span className='text-amber-400'>{value >= 1 ? <Sprite id='star' /> : value >= 0.5 ? <Sprite id='star-half' /> : <Sprite id='star-empty' />}</span>
            <span className='text-amber-400'>{value >= 2 ? <Sprite id='star' /> : value >= 1.5 ? <Sprite id='star-half' /> : <Sprite id='star-empty' />}</span>
            <span className='text-amber-400'>{value >= 3 ? <Sprite id='star' /> : value >= 2.5 ? <Sprite id='star-half' /> : <Sprite id='star-empty' />}</span>
            <span className='text-amber-400'>{value >= 4 ? <Sprite id='star' /> : value >= 3.5 ? <Sprite id='star-half' /> : <Sprite id='star-empty' />}</span>
            <span className='text-amber-400'>{value >= 5 ? <Sprite id='star' /> : value >= 4.5 ? <Sprite id='star-half' /> : <Sprite id='star-empty' />}</span>{' '}
            <span className='inline-block absolute top-3'> {text ? `from ${text}` : ''}</span>
        </p>
    );
}

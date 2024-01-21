import Image from 'next/image';

/** Components. */
import Hero from '../components/ui/hero';
import Container from '../components/ui/container';
import Sprite from '../components/ui/sprite';

/** Default export. */
export default function Home() {
    return (
        <>
            <Hero />
            <section className='min-h-screen p-2 flex flex-col gap-2'>
                <Container title='Flash Sale' section='sale' />
                <Container title='Just For You' section='regular' />
                <Container title='Hot Deals' section='hot' />
                <Container title='Our Picks' section='picks' />
            </section>
        </>
    );
}

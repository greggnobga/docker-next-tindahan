import Image from 'next/image';

/** Components. */
import Sprite from '../components/ui/sprite';
import Hero from '../components/ui/hero';
import Container from '../components/ui/container';

/** Default export. */
export default function Home() {
    return (
        <>
            <Hero />
            <section className='p-2 flex flex-col min-h-screen gap-2'>
                <Container title='Flash Sale' section='sale' />
                <Container title='Just For You' section='regular' />
                <Container title='Hot Deals' section='hot' />
                <Container title='Our Picks' section='picks' />
            </section>
        </>
    );
}

/** CSS. */
import '../css/global.css';

/** Font. */
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

/** Metadata. */
export const metadata = {
    title: 'Tindahan',
    description: 'Shop for low and affordable prices.',
    referrer: 'no-referrer',
};

/** Components. */
import Nav from '../components/ui/nav';
import Hero from '../components/ui/hero';
import Footer from '../components/ui/footer';

/** Default export. */
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`silver ${montserrat.className} text-slate-800 leading-5`}>
                <div className='m-4 pr-2 text-[.50rem] uppercase text-right'>
                    <span className='p-2 cursor-pointer'>Login</span>
                    <span className='p-2 cursor-pointer'>Signup</span>
                    <span className='p-2 cursor-pointer'>Support</span>
                    <span className='p-2 cursor-pointer'>Feedback</span>
                </div>
                <header className='m-4 py-4  bg-orange-700 rounded-2xl'>
                    <Nav />
                </header>
                <main className='m-4 h-m-screen'>
                    <Hero />
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    );
}

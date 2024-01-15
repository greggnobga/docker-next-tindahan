/** Vendor. */
import Link from 'next/link';

/** Store. */
import StoreProvider from '../redux/store-provider';

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
import Footer from '../components/ui/footer';

/** Default export. */
export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`silver ${montserrat.className} text-slate-800 leading-5`}>
                <StoreProvider>
                    <header>
                        <aside className='m-4 pr-2 text-[.50rem] uppercase text-right'>
                            <Link href='/login'>
                                <span className='p-2 cursor-pointer hover:text-amber-500'>Login</span>
                            </Link>
                            <Link href='/signup'>
                                <span className='p-2 cursor-pointer hover:text-amber-500'>Signup</span>
                            </Link>
                            <Link href='/support'>
                                <span className='p-2 cursor-pointer hover:text-amber-500'>Support</span>
                            </Link>
                        </aside>
                        <nav className='m-4 py-4  bg-orange-700 rounded-2xl'>
                            <Nav />
                        </nav>
                    </header>
                    <main className='m-4 m-h-screen'>{children}</main>
                    <footer>
                        <Footer />
                    </footer>
                </StoreProvider>
            </body>
        </html>
    );
}

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
import Menu from '../components/ui/menu';
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
                            <Menu />
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

/** Components. */
import Container from '../../../components/ui/container';

/** Default export. */
export default function ProductDetail() {
    return (
        <section className='min-h-screen p-2 flex flex-col sm:flex-row flex-wrap gap-4'>
            <div className='w-full sm:w-2/12 flex-grow'>
                <img className='w-full h-full object-fill' src='/img/placeholder.png' alt='Placeholder' />
            </div>
            <div className='w-full sm:w-8/12 flex-grow'>
                <div className='pb-4 w-full h-fit sm:h-2/6'>
                    <p className='pb-2 text-md font-medium'>USB Bootable Disk</p>
                    <p className='text-sm font-medium'>90.00</p>
                    <span className='text-xs font-thin text-slate-700 mr-1'>100.00</span>
                    <span className='text-xs font-thin text-red-900'>-10%</span>
                </div>
                <div className='pb-4 w-full h-fit sm:h-3/6'>
                    <p className='text-sm font-light'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nemo enim ipsam voluptatem quia
                        voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                        dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                        voluptatem.
                    </p>
                </div>
                <div className='pt-2 w-full h-fit sm:h-1/6'>
                    <div className='flex flex-col place-items-end'>
                        <button type='button' className='button-primary'>
                            Add Cart
                        </button>
                    </div>
                </div>
            </div>
            <Container title='Recommendation' section='recommendation' />
        </section>
    );
}

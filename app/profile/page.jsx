/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const ProfileInformation = dynamic(() => import('../../components/profile/profile-information'), { ssr: false });

/** Default export. */
export default function ProfilePage() {
    /** Return something. */
    return (
        <div className='min-h-screen'>
            <h1 className='pb-2 text-left'>Profile</h1>
            <div className='grid sm:grid-cols-12 gap-2'>
                <div className='p-2 sm:col-span-4 border border-slate-50 bg-slate-50 rounded shadow-inner'>
                    <ProfileInformation />
                </div>
                <div className='p-2 sm:col-span-8 border border-slate-50 bg-slate-50 rounded shadow-inner'>My orders...</div>
            </div>
        </div>
    );
}

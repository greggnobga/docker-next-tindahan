/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const Update = dynamic(() => import('../../../components/profile/profile-update'), { ssr: false });

/** Default export. */
export default function ProfileUpdate() {
    /** Return something. */
    return (
        <div className='min-h-screen'>
            <h1 className='pb-2 text-left'>Update Profile</h1>
            <Update />
        </div>
    );
}

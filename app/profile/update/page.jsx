/** Vendor. */
import dynamic from 'next/dynamic';

/** Components. */
const ProfileUpdate = dynamic(() => import('../../../components/profile/profile-update'), { ssr: false });

/** Default export. */
export default function Update() {
    /** Return something. */
    return (
        <div className='min-h-screen'>
            <h1 className='pb-2 text-left'>Update Profile</h1>
            <ProfileUpdate />
        </div>
    );
}

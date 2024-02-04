/** Vendor. */
import { NextResponse } from 'next/server';

/** Library. */
import Watcher from './lib/watcher';

/** Export default function. */
export default async function middleware(request) {
    /** Call the watcher to verify the cookie integrity. */
    const { verified } = await Watcher(request);

    /** If in login page with no token just return. */
    if (request.nextUrl.pathname.startsWith('/login') && !verified) {
        return;
    }

    /** If in profile page and not verfied redirect to login page. */
    if (request.nextUrl.pathname.startsWith('/dashboard') && !verified) {
        /** Return to login page. */
        return NextResponse.redirect(`${process.env.HOST}/login`);
    }

    /** If in profile page and not verfied redirect to login page. */
    if (request.nextUrl.pathname.startsWith('/profile') && !verified) {
        /** Return to login page. */
        return NextResponse.redirect(`${process.env.HOST}/login`);
    }

    /** If in shipping page and not verfied redirect to login page. */
    if (request.nextUrl.pathname.startsWith('/shipping') && !verified) {
        /** Return to login page. */
        return NextResponse.redirect(`${process.env.HOST}/login`);
    }

    /** If in login page and already verified redirect to dashboard or profile. */
    if (request.nextUrl.pathname.startsWith('/login') && verified) {
        return NextResponse.redirect(`${process.env.HOST}/profile`);
    }

    /** If in dashboard page and not verfied redirect to login page. */
    if (request.nextUrl.pathname.startsWith('/dashboard') && verified && !verified.admin) {
        /** Return to profile page. */
        return NextResponse.redirect(`${process.env.HOST}/profile`);
    }
}

/** Export config. */
export const config = {
    matcher: ['/dashboard', '/login', '/shipping', '/profile'],
};

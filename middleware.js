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

    /** If in profile page and not verified redirect to login page. */
    if (request.nextUrl.pathname.startsWith('/dashboard') && !verified) {
        /** Return to login page. */
        return NextResponse.redirect(`${process.env.HOST}/login`);
    }

    /** If in orders page and not verified redirect to home page. */
    if (request.nextUrl.pathname.startsWith('/orders') && !verified) {
        /** Return to login page. */
        return NextResponse.redirect(`${process.env.HOST}/`);
    }

    /** If in profile page and not verified redirect to login page. */
    if (request.nextUrl.pathname.startsWith('/profile') && !verified) {
        /** Return to login page. */
        return NextResponse.redirect(`${process.env.HOST}/login`);
    }

    if (request.nextUrl.pathname.startsWith('/profile/update') && !verified) {
        /** Return to login page. */
        return NextResponse.redirect(`${process.env.HOST}/login`);
    }

    /** If in shipping page and not verified redirect to login page. */
    if (request.nextUrl.pathname.startsWith('/shipping') && !verified) {
        /** Return to login page. */
        return NextResponse.redirect(`${process.env.HOST}/login?redirect=shipping`);
    }

    /** If in login page and already verified redirect to profile page. */
    if (request.nextUrl.pathname.startsWith('/login') && verified) {
        /** Return to profile page. */
        return NextResponse.redirect(`${process.env.HOST}/profile`);
    }

    /** If in orders page and verified redirect to profile page. */
    if (request.nextUrl.pathname.startsWith('/orders') && verified) {
        /** Return to profile page. */
        return NextResponse.redirect(`${process.env.HOST}/profile`);
    }

    /** If in dashboard page and verified but not admin redirect to login page. */
    if (request.nextUrl.pathname.startsWith('/dashboard') && verified && !verified.admin) {
        /** Return to profile page. */
        return NextResponse.redirect(`${process.env.HOST}/profile`);
    }
}

/** Export config. */
export const config = {
    matcher: ['/dashboard', '/login', '/shipping', '/orders', '/profile', '/profile/update'],
};

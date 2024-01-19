/** Vendor. */
import cookie from 'cookie';
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/mongo';
import { Sanitizer } from '../../../lib/sanitizer';
import { bcryptHash } from '../../../lib/bcrypt';
import { generateToken } from '../../../lib/token';

/** Model. */
import User from '../../../mongoose/models/user-model';

/** Connect MongonDB. */
Database();

export async function POST(request) {
    /** Await the post data. */
    const data = await request.json();

    /** Sanitize post data. */
    const filtered = await Sanitizer(data);

    /** If sanitization has error. */
    if (filtered.error) {
        return NextResponse.json({ message: filtered.message });
    } else {
        /** Find user in database. */
        const user = await User.findOne({ email: filtered.email });

        /** Check if not found. */
        if (!user) {
            /** Hash password. */
            const password = await bcryptHash({ entered: filtered.password });

            /** Add to database record. */
            try {
                /** Prepare data. */
                const result = new User({ ...filtered, password: password });

                /** Save user. */
                await result.save();

                /** Return user related data and set cookie in the jar. */
                return NextResponse.json(
                    {
                        ...filtered,
                        message: filtered.firstname + ', your account has been successfully created.',
                        status: 200,
                        logged: true,
                    },
                    {
                        headers: {
                            'Set-Cookie': cookie.serialize('token', await generateToken({ id: result._id, admin: result.admin }), {
                                httpOnly: true,
                                secure: process.env.APP_ENV !== 'development',
                                MaxAge: 60 * 60,
                                sameSite: 'strict',
                                path: '/',
                            }),
                        },
                    },
                );
            } catch (error) {
                /** Return error message. */
                return NextResponse.json({ message: 'The server is currently busy, so you cannot create an account.', status: 500 });
            }
        } else {
            /** Return user found message. */
            return NextResponse.json({ message: 'The person associated with the email address has already registered.', status: 302, logged: false });
        }
    }
}

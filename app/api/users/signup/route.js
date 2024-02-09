/** Vendor. */
import cookie from 'cookie';
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../../lib/mongo';
import { Sanitizer } from '../../../../lib/sanitizer';
import { bcryptHash } from '../../../../lib/bcrypt';
import { generateToken } from '../../../../lib/token';

/** Model. */
import User from '../../../../mongoose/models/user-model';

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

            /** Create slug. */
            const first = filtered.firstname ? filtered.firstname : 'firstname';
            const last = filtered.lastname ? filtered.lastname : 'lastname';
            const slug = first.toLowerCase() + '-' + last.toLowerCase() + '-' + Math.random().toString().slice(2, 11);

            /** Add to database record. */
            try {
                /** Prepare data. */
                const result = new User({ ...filtered, password: password, slug: slug, admin: false });

                /** Save user. */
                await result.save();

                /** Return user related data and set cookie in the jar. */
                return NextResponse.json(
                    {
                        id: result._id,
                        firstname: result.firstname,
                        lastname: result.lastname,
                        image: result.image,
                        slug: result.slug,
                        email: result.email,
                        mobile: result.mobile,
                        gender: result.gender,
                        admin: result.admin,
                        message: result.firstname + ', your account has been successfully created.',
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
                return NextResponse.json({ message: 'Check the thrown error for more detailed information about what went wrong.', status: 500 });
            }
        } else {
            /** Return user found message. */
            return NextResponse.json({ message: 'The person associated with the email address has already registered.', status: 302, logged: false });
        }
    }
}

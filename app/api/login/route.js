/** Vendor. */
import cookie from 'cookie';
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../lib/mongo';
import { bcryptCompare } from '../../../lib/bcrypt';
import { generateToken } from '../../../lib/token';

/** Model. */
import User from '../../../mongoose/models/user-model';

/** Connect MongonDB. */
Database();

export async function POST(request) {
    /** Await the post data. */
    const { email, password } = await request.json();

    /** Find user in database. */
    const user = await User.findOne({ email });

    /** Check if found. */
    if (user) {
        /** Compare entered password against hashed password. */
        const compare = await bcryptCompare({ entered: password, hashed: user.password });

        /** Check if password matched. */
        if (compare) {
            /** Return user related data and set cookie in the jar. */
            return NextResponse.json(
                {
                    id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    mobile: user.mobile,
                    gender: user.gender,
                    admin: user.admin,
                    message: user.firstname + ', we are glad you are back and hope you will have a good time with us.',
                    status: 200,
                    logged: true,
                },
                {
                    headers: {
                        'Set-Cookie': cookie.serialize('token', await generateToken({ id: user._id, admin: user.admin }), {
                            httpOnly: true,
                            secure: process.env.APP_ENV !== 'development',
                            MaxAge: 60 * 60,
                            sameSite: 'strict',
                            path: '/',
                        }),
                    },
                },
            );
        } else {
            /** Return user not found message. */
            return NextResponse.json({ message: 'The email address or password entered does not match.', status: 302, logged: false });
        }
    } else {
        /** Return user not found message. */
        return NextResponse.json({ message: 'The user associated with the email address was not found.', status: 302, logged: false });
    }
}

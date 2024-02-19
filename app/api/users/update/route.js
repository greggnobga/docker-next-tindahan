/** Vendor. */
import cookie from 'cookie';
import { NextResponse } from 'next/server';

/** Library. */
import Database from '../../../../lib/mongo';
import Watcher from '../../../../lib/watcher';
import { Sanitizer } from '../../../../lib/sanitizer';
import { generateToken } from '../../../../lib/token';
import { bcryptCompare, bcryptHash } from '../../../../lib/bcrypt';

/** Model. */
import User from '../../../../mongoose/models/user-model';

/** Connect MongonDB. */
Database();

/** PUT. */
export async function PUT(request) {
    /** Call the watcher to verify the cookie integrity. */
    const { verified } = await Watcher(request);

    if (!verified) {
        /** Return error message. */
        return NextResponse.json({ message: 'Before the request stands a watcher on guard.', status: 403 });
    }

    /** Watcher verdict. */
    if (verified) {
        /** Await the post data. */
        const data = await request.json();

        /** If no id or email set in the request return error message. */
        if (!data.userid || !data.email || !data.oldpassword || !data.password) {
            return NextResponse.json({ message: 'The request is missing some critical information!', status: 302, logged: false });
        }

        /** Find user in database. */
        const user = await User.findOne({ _id: data.userid, email: data.email });

        /** If the query return empty return error message. */
        if (!user) {
            return NextResponse.json({ message: 'The user is not found.', status: 302, logged: false });
        }

        /** Compare entered password against hashed password. */
        const compare = await bcryptCompare({ entered: data.oldpassword, hashed: user.password });

        if (!compare) {
            return NextResponse.json({ message: 'The old password check returned unsuccessfully.', status: 302, logged: false });
        }

        /** Add to database record. */
        if (user) {
            /** Sanitize post data. */
            const filtered = await Sanitizer(data);

            /** Hash password. */
            const hashed = await bcryptHash({ entered: filtered.password });

            /** Create slug. */
            const first = filtered.firstname ? filtered.firstname : 'firstname';
            const last = filtered.lastname ? filtered.lastname : 'lastname';
            const slug = first.toLowerCase() + '-' + last.toLowerCase() + '-' + Math.random().toString().slice(2, 11);

            /** Add to database record. */
            try {
                /** Prepare data. */
                user.firstname = filtered.firstname ? filtered.firstname : user.firstname;
                user.lastname = filtered.lastname ? filtered.lastname : user.lastname;
                user.image = filtered.image ? filtered.image : user.image;
                user.slug = filtered.slug ? filtered.slug : slug;
                user.email = filtered.email ? filtered.email : email;
                user.mobile = filtered.mobile ? filtered.mobile : user.mobile;
                user.gender = filtered.gender ? filtered.gender : user.gender;
                user.admin = verified.admin ? filtered.admin : false;
                user.password = hashed;

                /** Save data. */
                const updated = await user.save();

                /** Return user related data and set cookie in the jar. */
                return NextResponse.json(
                    {
                        userid: updated._id,
                        firstname: updated.firstname,
                        lastname: updated.lastname,
                        image: updated.image,
                        slug: updated.slug,
                        email: updated.email,
                        mobile: updated.mobile,
                        gender: updated.gender,
                        admin: updated.admin,
                        message: updated.firstname + ', your account has been successfully updated.',
                        status: 200,
                        logged: true,
                    },
                    {
                        headers: {
                            'Set-Cookie': cookie.serialize('token', await generateToken({ id: updated._id, admin: updated.admin }), {
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
        }
    }
}

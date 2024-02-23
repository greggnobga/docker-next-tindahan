'use client';

/** React. */
import { useState, useEffect } from 'react';

/* Vendor. */
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
import { sendSupport } from '../../redux/actions/support-actions';
import { resetToast } from '../../redux/actions/toast-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Component. */
const Notifications = dynamic(() => import('../../components/ui/notifications'), { ssr: false });

/** Default export. */
export default function SupportPage() {
    /** Map html element to validate hook. */
    const {
        value: fullname,
        hasError: fullnameHasError,
        isValid: fullnameIsValid,
        valueChangeHandler: fullnameChangeHandler,
        inputBlurHandler: fullnameBlurHandler,
        resetHandler: fullnameInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9!@#$%^&*()_+]*$/));

    const {
        value: email,
        hasError: emailHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        resetHandler: emailInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/));

    const {
        value: order,
        hasError: orderHasError,
        isValid: orderIsValid,
        valueChangeHandler: orderChangeHandler,
        inputBlurHandler: orderBlurHandler,
        resetHandler: orderInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9.'?!,@$#\-_]*$/));

    const {
        value: message,
        hasError: messageHasError,
        isValid: messageIsValid,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        resetHandler: messageInputReset,
    } = useValidator((value) => value.trim() !== '' && value.match(/^[ A-Za-z0-9.'?!,@$#\-_]*$/));

    /** Change class logic if valid or otherwise. */
    const fullnameInputClasses = fullnameHasError ? 'input-error' : 'input-success';
    const emailInputClasses = emailHasError ? 'input-error' : 'input-success';
    const orderInputClasses = orderHasError ? 'input-error' : 'input-success';
    const messageInputClasses = messageHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (fullnameIsValid && emailIsValid && orderIsValid && messageIsValid) {
        formIsValid = true;
    }

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Submit hanndler. */
    function submitHandler(e) {
        e.preventDefault();

        /** Change blur state. */
        fullnameBlurHandler(true);
        emailBlurHandler(true);
        orderBlurHandler(true);
        messageBlurHandler(true);

        /** Check if there is invalid input. */
        if (!emailIsValid && !fullnameIsValid && !orderIsValid && !messageIsValid) return;

        /** Dispatch actions. */
        dispatch(sendSupport({ fullname, email, order, message }));

        /** Reset input. */
        fullnameInputReset();
        emailInputReset();
        orderInputReset();
        messageInputReset();
    }

    /** Use selector. */
    const toast = useSelector((state) => state.toast);
    const { status: responseStatus, message: responseMessage } = toast;

    /** Use router. */
    const router = useRouter();

    /** Check if password match and length. */
    const [orderLength, setOrderLength] = useState(false);

    /** Use effect. */
    useEffect(() => {
        /** Check if password length is greater than 10. */
        if (order.length != 0 && order.length < 24) {
            setOrderLength(true);
        } else {
            setOrderLength(false);
        }

        /** Check if response has value. */
        if (responseMessage) {
            /** Timer clean up function. */
            const timer = setTimeout(() => {
                /** Reset message. */
                dispatch(resetToast());
            }, 5000);

            /** Clear running timer. */
            return () => clearTimeout(timer);
        }
    }, [dispatch, order, responseMessage]);

    /** Return something. */
    return (
        <section className='min-h-screen'>
            <h1 className='pb-2 text-center'>Support</h1>
            {responseMessage ? <Notifications message={responseMessage} status={responseStatus} /> : ''}
            <form onSubmit={submitHandler} method='POST' className='bg-slate-200 p-2 rounded'>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                        <label htmlFor='name' className='block mb-2 text-sm font-light text-gray-900'>
                            Full Name
                        </label>
                        <input
                            className={fullnameInputClasses}
                            id='fullname'
                            name='fullname'
                            type='text'
                            value={fullname}
                            onChange={fullnameChangeHandler}
                            onBlur={fullnameBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {fullnameHasError ? <p className='input-message'>Please enter a valid full name.</p> : ''}
                    </div>
                    <div>
                        <label htmlFor='email' className='block mb-2 text-sm font-light text-gray-900'>
                            Email Address
                        </label>
                        <input
                            className={emailInputClasses}
                            id='email'
                            name='email'
                            type='email'
                            value={email}
                            onChange={emailChangeHandler}
                            onBlur={emailBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {emailHasError ? <p className='input-message'>Please enter a valid email address.</p> : ''}
                    </div>
                    <div className='md:col-span-2'>
                        <label htmlFor='message' className='block mb-2 text-sm font-light text-gray-900'>
                            Order ID
                        </label>
                        <input
                            className={orderInputClasses}
                            id='order'
                            name='order'
                            type='text'
                            value={order}
                            onChange={orderChangeHandler}
                            onBlur={orderBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {orderHasError ? (
                            <p className='input-message'>Please enter a valid order id.</p>
                        ) : (
                            orderLength && <p className='input-message'>Order ID must be 24 characters or more.</p>
                        )}
                    </div>

                    <div className='md:col-span-2'>
                        <label htmlFor='message' className='block mb-2 text-sm font-light text-gray-900'>
                            Your message
                        </label>
                        <textarea
                            className={messageInputClasses}
                            id='mesasge'
                            name='message'
                            type='text'
                            value={message}
                            onChange={messageChangeHandler}
                            onBlur={messageBlurHandler}
                            autoComplete='off'
                            placeholder='Write your concerns here...'
                            required></textarea>
                        {messageHasError ? <p className='input-message'>Please enter a valid message.</p> : ''}
                    </div>
                    <button type='submit' disabled={!formIsValid} className='button-primary'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}

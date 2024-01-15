'use client';

/** React. */
import { useEffect } from 'react';

/* Vendor. */
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

/** Action. */
// import { sendMessage } from '../../redux/actions/message-actions';
import { resetToast } from '../../redux/actions/toast-actions';

/** Hook. */
import useValidator from '../../hooks/use-validator';

/** Component. */
import Notifications from '../../components/ui/notifications';

/** Default export. */
export default function Support() {
    /** Map html element to validate hook. */
    const {
        value: name,
        hasError: nameHasError,
        isValid: nameIsValid,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        resetHandler: nameInputReset,
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
    const nameInputClasses = nameHasError ? 'input-error' : 'input-success';
    const emailInputClasses = emailHasError ? 'input-error' : 'input-success';
    const orderInputClasses = orderHasError ? 'input-error' : 'input-success';
    const messageInputClasses = messageHasError ? 'input-error' : 'input-success';

    /** Set overall form validity. */
    let formIsValid = false;
    if (nameIsValid && emailIsValid && orderIsValid && messageIsValid) {
        formIsValid = true;
    }

    /** Use dispatch. */
    const dispatch = useDispatch();

    /** Submit hanndler. */
    function submitHandler(e) {
        e.preventDefault();

        /** Change blur state. */
        nameBlurHandler(true);
        emailBlurHandler(true);
        orderBlurHandler(true);
        messageBlurHandler(true);

        /** Check if there is invalid input. */
        if (!emailIsValid && !nameIsValid && !orderIsValid && !messageIsValid) return;

        /** Dispatch actions. */
        // dispatch(sendMessage({ name, email, order, message }));
        console.log(name, email, order, message);

        /** Reset input. */
        nameInputReset();
        emailInputReset();
        orderInputReset();
        messageInputReset();
    }

    /** Use selector. */
    const userAuth = useSelector((state) => state.userAuth);
    const { logged } = userAuth;

    const toastMessage = useSelector((state) => state.toastMessage);
    const { status: responseStatus, message: responseMessage } = toastMessage;

    /** Use router. */
    const router = useRouter();

    /** Use effect. */
    useEffect(() => {
        /** If logged push to dashboard. */
        if (logged) {
            router.push('/dashboard');
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
    }, [dispatch, logged, responseMessage]);

    /** Return something. */
    return (
        <div className='min-h-screen'>
            <h1 className='pb-2 text-center'>Support</h1>

            <form onSubmit={submitHandler} method='POST' className='bg-slate-200 p-2 rounded'>
                <div className='grid gap-6 mb-6 md:grid-cols-2'>
                    <div>
                        <label htmlFor='name' className='block mb-2 text-sm font-light text-gray-900'>
                            Full Name
                        </label>
                        <input
                            className={nameInputClasses}
                            id='name'
                            name='name'
                            type='text'
                            value={name}
                            onChange={nameChangeHandler}
                            onBlur={nameBlurHandler}
                            autoComplete='off'
                            placeholder=''
                            required
                        />
                        {nameHasError ? <p className='input-message'>Please enter a valid full name.</p> : ''}
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
                        {orderHasError ? <p className='input-message'>Please enter a valid order id.</p> : ''}
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
        </div>
    );
}

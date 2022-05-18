import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user1, loading1, error1,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error3] = useSendPasswordResetEmail(auth);

    if (error || error1 || error3) {
        toast.error(error?.message || error1?.message || error3?.message);
    }
    if (loading || loading1 || sending) {
        return <p className='text-[#FF5400] bg-slate-500 px-3 py-1'>Loading...</p>
    }
    if (user?.user?.email || user1?.user?.email) {
        toast.success('Welcome To To-Do app');
        navigate(from, { replace: true });
    }

    const handleLoginWithEmailPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        e.target.reset();
    }

    return (
        <div className='pb-10'>
            <h3 className='text-green-500 pt-5 text-center'>New to My to do?</h3>
            <div className='flex mt-4 mb-9 items-center justify-center'>
                <button onClick={() => navigate('/regester')} className='font-bold  flex justify-center items-center text-[#FF5400] mx-4 text-3xl'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>Regester</button>
                <div>
                    <div className='border-t-2 border-[#FF5400] w-16'></div>
                    <div className='border-b-2 border-[#FF5400] w-8 mt-3'></div>
                </div>
            </div>
            <div className='w-full md:w-2/3 mx-auto border-2 bg-success opacity-80 border-[#FF5400] p-11 rounded-md'>
                <form onSubmit={handleLoginWithEmailPassword} className='flex flex-col text-white'>
                    <label className='text-[#FF5400]' htmlFor="Email">Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} className='border-0 border-b-2 bg-transparent border-[#FF5400] my-4' type="email" name='email' />
                    <label className='text-[#FF5400]' htmlFor="Password">Password</label>
                    <input className='border-b-2 bg-transparent border-[#FF5400] my-4' name='password' type='password' />
                    <p className='mb-6 text-red-600'>{error3 || error?.message || error1?.message}</p>
                    <input className='bg-[#FF5400] hover:bg-[#FF4400] text-white w-2/3 mx-auto mb-6 p-2 px-5 rounded-md cursor-pointer' type="submit" value="Login" />
                </form>
                <button onClick={async () => {
                    await sendPasswordResetEmail(email);
                    toast.success('Sent email');
                }} className='text-[#FF5400] my-6 hover:text-red-500' >Lost your password?</button>
                <div className='flex justify-center items-center mt-6 text-[#FF5400]'>
                    <div className='border-b-2 border-[#FF5400] w-2/6 mr-2'></div>
                    or
                    <div className='border-b-2 border-[#FF5400] w-2/6 ml-2'></div>
                </div>
                <div className='mt-12'>
                    <button onClick={() => signInWithGoogle()} className='flex items-center w-2/3 mx-auto my-5 bg-white hover:bg-gray-300 text-[#FF5400] rounded-md p-3'><FcGoogle /><p className='text-sm md:text-xl text-[#FF5400] ml-3'>Login With Google.</p></button>

                </div>
            </div>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import { Link , useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

    //form value
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [submitError, setSubmitError] = useState('');

    // form data
    const getEmail = (e) => {
        setMail(e.target.value);
    }
    const getPassword = (e) => {
        let passwordValue = e.target.value;
        // check password strength
        if (passwordValue.length < 5 && passwordValue.length > 0) {
            setSubmitError('Password Must be at least 6 digit.');
            e.target.value = "";
            return;
        }
        setSubmitError('');
        setPassword(passwordValue);
    }
    

    // use Auth
    const { googleSignIn, loginUserWithEmail } = useAuth();

    // redirect after login

    const history = useHistory();
    const location = useLocation();

    const direction = location.state?.from || "/";

    // redirect after Google login
    const redirectAfterGoogleLogin = () => {

        googleSignIn()
            .then(result => {
                history.push(direction);
            })
    }


    // redirect after Email login
    const redirectAfterEmailLogin = () => {

        loginUserWithEmail(mail,password)
            .then(result => {
                history.push(direction);
            })
    }

    // on form submit 
    const formSubmit = (e) => {
        e.preventDefault();

        // login user
        if (mail && password) {
            redirectAfterEmailLogin();
        }
    }

    return (
        <section className="w-full">
            <div className=" w-full h-full bg-gray-900" style={{ backgroundImage: 'url(&quot;https://demos.creative-tim.com/tailwindcss-starter-project/static/media/register_bg_2.2fee0b50.png&quot)', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}></div>
            <div className="container mx-auto lg:px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full md:w-6/12 lg:w-4/12 lg:px-4 pt-14">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-gray-600 text-sm font-bold">Sign in with</h6></div>
                                <div className="btn-wrapper text-center">
                                    <button onClick={redirectAfterGoogleLogin} className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style={{ transition: 'all 0.15s ease 0s' }}><img alt="..." className="w-5 mr-1" src="https://icon-library.com/images/google-login-icon/google-login-icon-24.jpg" />Google</button>
                                </div>
                                <hr className="mt-6 border-b-1 border-gray-400" />
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-gray-500 text-center mb-3 font-bold"><small>Or sign in with credentials</small></div>
                                <form onSubmit={formSubmit}>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                                        <input onBlur={getEmail} type="email" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Email" required style={{ transition: 'all 0.15s ease 0s' }} />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Password</label>
                                        <input required onBlur={getPassword} type="password" className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full" placeholder="Password" style={{ transition: 'all 0.15s ease 0s' }} />
                                        <span className="text-red-600">{submitError}</span>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input id="customCheckLogin" type="checkbox" className="form-checkbox text-gray-800 ml-1 w-5 h-5" style={{ transition: 'all 0.15s ease 0s' }} /><span className="ml-2 text-sm font-semibold text-gray-700">Remember me</span></label>
                                    </div>
                                    <div className="text-center mt-6">
                                        <button className="appoinment-btn bg-red-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full" type="submit" style={{ transition: 'all 0.15s ease 0s' }}>Log In</button>
                                    </div>
                                </form>
                                <div className=" text-right">New Here? <Link to="/signup"><span className="text-red-800 mr-1">
                                    Create a new account</span></Link> </div>
                            </div>
                        </div>
                        {/* <div className="flex flex-wrap mt-6">
                            <div className="w-1/2"><a href="#pablo" className="text-gray-300"><small>Forgot password?</small></a></div>
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
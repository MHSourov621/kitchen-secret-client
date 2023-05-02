import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {googleLogin} = useContext(AuthContext)
    
    
    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => {
            const error = e.message;
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold my-6">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn text-lg bg-black text-white">Login</button>
                            </div>
                        </form>
                        <div className='flex flex-col'>
                            <button onClick={handleGoogleLogin} className="text-lg border-2 border-black rounded-lg w-3/4 mx-auto py-2 mb-4"><FaGoogle
                            className="inline mr-4"></FaGoogle> Google Login</button>
                            <button className="text-lg border-2 border-black rounded-lg w-3/4 mx-auto py-2 mb-10"><FaGithub className='inline mr-4'></FaGithub>Github Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
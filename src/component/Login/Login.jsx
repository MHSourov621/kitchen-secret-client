import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState("");
    const { googleLogin, user, githubLogin, emailLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(err => {
                const error = err.message;
                console.log(error);
                setError(error)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(err => {
            const error = error.message;
            console.log(error);
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailLogin(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(err =>{
            const error = err.message;
            console.log(error);
            setError(error)
        })
    }

    return (
        <div>
            {
                user && (
                    <Navigate to="/" replace={true} />
                )
            }
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold my-6">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <p className='text-red-600 text-lg ml-8 pt-8'>{error}</p>
                        <form onSubmit={handleSubmit} className="card-body">
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
                            <button onClick={handleGoogleLogin} className="text-lg border-2 border-black rounded-lg w-3/4 mx-auto py-2 mb-4 hover:bg-black hover:text-white duration-300"><FaGoogle
                                className="inline mr-4"></FaGoogle> Google Login</button>
                            <button onClick={handleGithubLogin} className="text-lg border-2 border-black rounded-lg w-3/4 mx-auto py-2 mb-4 hover:bg-black hover:text-white duration-300"><FaGithub className='inline mr-4'></FaGithub>Github Login</button>
                            <p className='text-md text-blue-500 text-center mb-10'>Don't have any account? <Link className='text-blue-700' to="/register">Go to register.</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
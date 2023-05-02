import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar text-black flex justify-between flex-col lg:flex-row py-8">
                <a className="ml-10 normal-case text-4xl ">Kitchen Secrets</a>
                <div className='text-xl'>
                    <Link to='/'>Home</Link>
                    <Link to="/blog" className='ml-10'>Blogs</Link>
                </div>
                <div className='text-xl'>
                    <Link to="/login">Login</Link>
                    <Link to="/register" className='ml-10 lg:mr-16'>Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
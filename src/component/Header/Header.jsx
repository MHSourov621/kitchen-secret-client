import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar text-black flex justify-between flex-col lg:flex-row py-8">
                <a className="ml-10 normal-case text-4xl ">Kitchen Secrets</a>
                <div className='text-xl'>
                    <Link to='/'>Home</Link>
                    <Link to="/blog" className='ml-10'>Blogs</Link>
                </div>
                <div className='text-xl'>
                    {
                        user ? (
                            <>
                                {console.log(user)}
                                <p className='mr-4'>{user.email}</p>
                                <div className=' user-image flex'>
                                {user.photoURL && <img className='w-12 rounded-full mr-4' src={user.photoURL} alt="" />}
                                <p className='mr-4 hidden user-name'>{user.displayName}</p>
                                </div>
                                <button onClick={logout} className='bg-black text-white btn'>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register" className='ml-10 lg:mr-16'>Register</Link>
                            </>
                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Header;
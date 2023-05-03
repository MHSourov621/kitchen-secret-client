import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-4xl font-bold mb-14 text-center'>Recipes By Category</h2>
            <div className='grid lg:grid-cols-3 lg:ml-16 mb-48'>
                <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
                    <figure><img src="https://leitesculinaria.com/wp-content/uploads/2021/10/classic-vanilla-cupcakes-1.jpg" alt="" /></figure>
                    <div className="card-body items-center bg-black text-white">
                        <h2 className="text-2xl ">Sweets</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
                    <figure><img src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=826&t=st=1683112455~exp=1683113055~hmac=43330c9ed6db8eb303da2d39d709de96023b3a6a73cc06a1f1effc48ca6b2f1c" alt="" /></figure>
                    <div className="card-body items-center bg-black text-white">
                        <h2 className="text-2xl ">Burger</h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
                    <figure><img src="https://img.freepik.com/free-photo/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware_176474-3185.jpg?w=826&t=st=1683112948~exp=1683113548~hmac=35785796cc4f630feb7ef0a608a84734a570dea789c05da3546a51eec7dcf22c" alt="" /></figure>
                    <div className="card-body items-center bg-black text-white">
                        <h2 className="text-2xl ">Pizza</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
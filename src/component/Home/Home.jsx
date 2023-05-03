import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefCard from '../Chef-card/ChefCard';

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allData')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div>
            <Banner></Banner>

            <h2 className='text-4xl font-bold mb-14 text-center'>Our Chefs</h2>
            <div className='grid lg:grid-cols-3 gap-16 mb-48'>
                {chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)}
            </div>

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

            <h2 className='text-4xl font-bold mb-14 text-center'>Most traditional food</h2>
            <div className="card card-side bg-base-100 shadow-xl mb-48">
                <figure><img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Panta_Ilish.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title mb-6 text-3xl font-bold">Panta Ilish</h2>
                    <p className='text-xl grow-0 mb-18'>Panta ilish is a dish from Bangladesh that combines a bowl of panta bhat—cooked and soaked rice—with fried ilish fish. </p>
                    <ul className='list-disc text-xl ml-8'>
                        <li>Panta Vat</li>
                        <li>Fish Fry</li>
                        <li>Mash potato</li>
                        <li>Green Chili</li>
                        <li>Onion</li>
                    </ul>
                    <div className='card-actions justify-end mt-12'>
                        <button className='bg-black text-white text-lg font-bold p-4 rounded-xl '>View Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
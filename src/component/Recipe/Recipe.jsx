import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Recipe = () => {
    const chef = useLoaderData();
    const { name, image, chefBio, num_recipes, experience, like, recipes } = chef.item;
    console.log(recipes);
    const notify = () => toast("Added to Favorite");
    const [on1, seton1] = useState(false);
    const [on2, seton2] = useState(false);
    const [on3, seton3] = useState(false);
    const handleBtn = () => {
        notify()
        seton1(true)
    }
    const handleBtn2 = () => {
        notify()
        seton2(true)
    }
    const handleBtn3 = () => {
        notify()
        seton3(true)
    }
    return (
        <div>
            <div className='flex mt-16 bg-stone-600 text-white p-12 mb-24'>
                <div className='my-auto'>
                    <h2 className='text-6xl mb-8'>{name}</h2>
                    <p className='text-2xl mb-8'>{chefBio}</p>
                    <p className='text-xl'>Experience: {experience} years</p>
                    <p className='text-xl'>Recipes: {num_recipes}</p>
                    <p className='text-xl'>Likes: {like}</p>
                </div>
                <LazyLoadImage effect="blur" style={{ height: "600px", width: "800px" }} src={image} alt="" />
            </div>
            <h2 className='text-4xl font-bold mb-14 text-center'>Recipes</h2>
            <div className='grid grid-cols-3 ml-16 mb-48'>
                <div className="card w-96 bg-stone-600 text-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold mb-6">{recipes[0].name}</h2>
                        <ul className='list-disc text-xl mb-6 ml-6'>
                            <p className='text-xl font-bold mb-4'>Ingredients</p>
                            <li>{recipes[0].ingredients[0]}</li>
                            <li>{recipes[0].ingredients[1]}</li>
                            <li>{recipes[0].ingredients[2]}</li>
                            <li>{recipes[0].ingredients[3]}</li>
                            <li>{recipes[0].ingredients[4]}</li>
                        </ul>
                        <p className='text-xl mb-6'>{recipes[0].cooking_method}</p>
                        <p className='text-xl mb-6'>Ratting: {recipes[0].rating} Star</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleBtn} disabled={on1} className="bg-black text-white text-lg font-bold p-4 rounded-xl">Add to Favorite</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-stone-600 text-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold mb-6">{recipes[1].name}</h2>
                        <ul className='list-disc text-xl mb-6 ml-6'>
                            <p className='text-xl font-bold mb-4'>Ingredients</p>
                            <li>{recipes[1].ingredients[0]}</li>
                            <li>{recipes[1].ingredients[1]}</li>
                            <li>{recipes[1].ingredients[2]}</li>
                            <li>{recipes[1].ingredients[3]}</li>
                            <li>{recipes[1].ingredients[4]}</li>
                        </ul>
                        <p className='text-xl mb-6'>{recipes[1].cooking_method}</p>
                        <p className='text-xl mb-6'>Ratting: {recipes[1].rating} Star</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleBtn2} disabled={on2} className="bg-black text-white text-lg font-bold p-4 rounded-xl">Add to Favorite</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-stone-600 text-white shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold mb-6">{recipes[2].name}</h2>
                        <ul className='list-disc text-xl mb-6 ml-6'>
                            <p className='text-xl font-bold mb-4'>Ingredients</p>
                            <li>{recipes[2].ingredients[0]}</li>
                            <li>{recipes[2].ingredients[1]}</li>
                            <li>{recipes[2].ingredients[2]}</li>
                            <li>{recipes[2].ingredients[3]}</li>
                            <li>{recipes[2].ingredients[4]}</li>
                        </ul>
                        <p className='text-xl mb-6'>{recipes[2].cooking_method}</p>
                        <p className='text-xl mb-6'>Ratting: {recipes[2].rating} Star</p>
                        <div className="card-actions justify-end">
                            <button onClick={handleBtn3} disabled={on3} className="bg-black text-white text-lg font-bold p-4 rounded-xl">Add to Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipe;
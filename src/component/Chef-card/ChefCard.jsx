import React from 'react';

const ChefCard = ({ chef }) => {
    console.log(chef);
    const { name, image, num_recipes, experience, like } = chef;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img style={{height: '400px'}} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{name}</h2>
                    <p className='text-lg'>Experience: {experience} years</p>
                    <p className='text-lg'>Recipes: {num_recipes}</p>
                    <p className='text-lg'>Likes: {like}</p>
                    <div className="card-actions justify-end">
                        <button className='bg-black text-white text-lg font-semibold p-4 rounded-xl'>View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;
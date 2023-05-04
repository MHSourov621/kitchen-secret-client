import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className='banner-container text-white mb-32'>
            <div className='lg:w-2/5 p-10 lg:py-28 lg:pl-16'>
                <h1 className='text-6xl mb-10'>Lets Start Cooking With Popular Recipes.</h1>
                <p className='text-xl mb-4'>Want to learn cook but confuse how to start?</p>
                <p className='text-xl'>No need to wort again.</p>
            </div>
        </div>
    );
};

export default Banner;
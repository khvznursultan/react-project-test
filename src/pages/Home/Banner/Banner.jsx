import React from 'react';
import './Banner.scss'


const Banner = () => {
    return (
        <section className='banner'>
            <div className="banner__container container">
                <div className="banner__info">
                    <p>NEW TREND</p>
                    <h3>COLLUSION</h3>
                    <p>An exclusive selection of this season's trends.</p>
                    <button>DISCOVER</button>
                    <button>SHOP NOW    </button>
                </div>
            </div>
        </section>
    );
};

export default Banner;
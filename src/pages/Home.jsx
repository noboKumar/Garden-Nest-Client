import React from 'react';
import { Helmet } from 'react-helmet';
import Slider from '../Components/Slider';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Garden Nest | Home
                </title>
            </Helmet>
            <Slider></Slider>
        </div>
    );
};

export default Home;
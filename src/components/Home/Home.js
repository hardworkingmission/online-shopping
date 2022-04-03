import React, { useContext } from 'react';
import { MyContext } from '../../App';


const Home = () => {
    const con=useContext(MyContext)
    return (
        <div className='w-5/6 mx-auto'>
            <h1>Home{con}</h1>
        </div>
    );
};

export default Home;
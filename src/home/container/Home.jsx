import React from 'react';

import HomeUi from '../ui/HomeUi.jsx'

const Home = (props) => {
    // console.log(props);
    return (
        <>
            <HomeUi>
                {props.children}
            </HomeUi>
        </>
    );
}

export default Home;
import React from 'react';

const Main = (props) => {
    // console.log(props);
    return (
        <div className='home-main'>
            {props.children}
        </div>
    );
}

export default Main;
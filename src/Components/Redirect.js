import { useEffect } from 'react';

const Redirect = ({ link }) => {

    useEffect(() => {
        window.location.href = link;
    }, [link]);

    return (
        <div className='MemeContainer'>
            <div className='MemeImage'><img rel="prefetch" src="./img/Memes/rickRoll.gif" alt="Rick Roll" width="380px" height="300px"/></div>
            <div className='MemeText'>Never gonna give you up- :3</div>
        </div>
    );
}

export default Redirect;
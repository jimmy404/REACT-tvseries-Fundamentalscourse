import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
    <div>
        <img
        style={{width: 40}}
        alt="Loader icon"
        src={loaderSrc}
        />
    </div>
);

export default Loader;
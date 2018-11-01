import React from 'react';

const Button = ({randomise}) => {
    return (<button onClick={randomise} className="btn">Generate Quote</button>
    );
};

export default Button;


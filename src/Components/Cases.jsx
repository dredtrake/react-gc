import React from 'react';

const Cases = ({by}) => {
    let renderComp = [];
    for (let i = 1; i <= by; i += 1) {
        renderComp.push(<div key={i} className={`guitar-fret position-${i}`}></div>)
    }
    return renderComp;
};

export default Cases;

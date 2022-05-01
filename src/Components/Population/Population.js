import React from 'react';

const Population = (props) => {
    const popu=props.popu;
    console.log(popu);
    const total=popu.reduce((total,prd)=> total+prd,0)
    return (
        <div>
            <h2>Add Country</h2>
            <h1>Population:{total}</h1>

        </div>
    );
};
 
export default Population;
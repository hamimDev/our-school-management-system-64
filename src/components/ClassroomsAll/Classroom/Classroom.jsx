import React from 'react';

const Classroom = ({classroom}) => {
    const {id,name,classroom_number,building,floor,image} = classroom;
    return (
        <div>
            <h1>{id}</h1>
            <h2>{classroom_number}</h2>
            <h3>{name}</h3>

        </div>
    );
};

export default Classroom;
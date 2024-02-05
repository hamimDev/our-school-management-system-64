import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Classroom from '../../ClassroomsAll/Classroom/Classroom';

const Classrooms = () => {
    const classrooms = useLoaderData();
    

    return (
        <div className=' container mx-auto'>
            {
                classrooms.map(classroom => <Classroom 
                    key={classroom.classroom_number}
                    classroom={classroom}
                ></Classroom>)
            }
        </div>
    );
};

export default Classrooms;
import React from 'react';
import Card from './Card'

const CardList = () => {
    return (
        <div className='row row-cols-1 row-cols-md-3 mt-4 g-4'>
             <Card/>
             <Card/>
             <Card/>
    </div>


    );
};

export default CardList;
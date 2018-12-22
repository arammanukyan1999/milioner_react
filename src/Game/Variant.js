import React from 'react';

export default ({question,ind,chooseVariant}) =>(
    <button 
        className='variant'
         onClick={chooseVariant}
         data-ind={ind}
         >{question} 
         </button>
)
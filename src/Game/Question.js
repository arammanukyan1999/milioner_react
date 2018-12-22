import React from 'react';
import './game.css'
import Timer from './Timer'
import Variant from './Variant'

export default ({question,chooseAnswer}) =>(
    <div>
        <h5 className='description'>{question.description}</h5>
        <div className='variants'>
        {question.variants.map((question,ind) => 
            <Variant className='question'
                 ind={ind}
                 chooseVariant={chooseAnswer} 
                 key={ind} 
                 question={question}
                 />
            )}
        </div>
       {/* <Timer></Timer> */}
    </div>
)
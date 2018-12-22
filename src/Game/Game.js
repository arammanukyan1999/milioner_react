import React, { Component } from 'react';



export default class Game extends Component {
    render() {
        const { variants } = this.props;

        return (
            <div className="game">
                {variants.map((variant,ind) => <button className='variantitem'> <span>{variant}</span> </button>)}
            </div>
        );
    }
}

import React, { Component } from 'react';
import Question from './Question'
import './game.css'

const questions=[
    {
        description:"Who played as Terminator?",
        correctAnswer:2,
        variants:[
            "Silvester Stalonne",
            "Stiven Sigal",
            "Arnold Schwarzenegger",
            "Brad Pitt"
        ]

        },
        {
            description: "The most UEFA winned team",
            correntAnswer:3,
            variants:[
                "Barcelona",
                "Milan",
                "Real Madrid",
                "Juventus"
            ]
        },
        {
            description: "Whot year is it now?",
            correntAnswer:3,
            variants:[
                "2019",
                "2020",
                "2018",
                "2015"
            ]
        }
]


export default class Game extends Component {
    state = {
        questions:questions.slice(1),
        currentQuestion: questions[0]
    }
    onChooseAnswer = (e) =>{
        const ind = parseInt(e.target.dataset.ind,10);
        if (this.state.currentQuestion.correctAnswer === ind){
            const questions = [...this.state.questions];
            const currentQuestion = questions.shift();
            if (!currentQuestion) {
                this.props.onViewChange('gameOver')
            }
            this.setState({
                currentQuestion,
                questions
            })
            
        } else {this.props.onViewChange('gameOver')}
    }
    render() {
        return (
            <div className="game">
              {<Question chooseAnswer={this.onChooseAnswer} question={this.state.currentQuestion}/>}
            </div>
        );
    }
}

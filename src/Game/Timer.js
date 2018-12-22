import React, { Component } from 'react';

export default class Timer extends Comment{
    constructor(props){
        super(props)
            this.state = {
                time: 30
            }
        }
    
    startTimer() {
        this.timer = setInterval(() => this.setState({
          time: this.state.time -1
        }), 1000)
      }
    render(){
        return(
            <div>
                
               <h3>{this.state.time}</h3>
               {this.startTimer()}
            </div>
        )
    }
}
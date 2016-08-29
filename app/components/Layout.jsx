// jshint esversion:6
import React from 'react';
import Choices from './Choices.jsx';
import Aside from './Aside.jsx';
import Message from './Message.jsx';
import { Link } from 'react-router';

export default class extends React.Component{
  constructor() {
    super();

    this.state = {
      computer: this.randomPick(),
      games: ['']
    };

    this.play = this.play.bind(this);
  }


  play(option) {
    var game = {};
    this.setState({ computer: this.randomPick() });
    game.result = this.state.computer === option ? 'tie' : this.result(option);
    game.computer = this.state.computer;
    game.player = option;

    this.state.games.push(game);
    return [option, game.result];
  }

  randomPick(){
    var weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    return weapons[Math.floor(Math.random() * weapons.length)];
  }

  reload(){
    window.location.href = '/';
  }

  result(option){
    if ((this.state.computer === "rock" && (option === "paper" || option === "spock")) ||
        (this.state.computer === "paper" && (option === "scissors" || option === "lizard")) ||
        (this.state.computer === "scissors" && (option === "rock" || option === "spock")) ||
        (this.state.computer === "lizard" && (option === "rock" || option === "scissors")) ||
        (this.state.computer === "spock" && (option === "lizard" || option === "paper"))
                ) {
      return 'win';
    } else {
      return 'loss';
    }
  }

  render(){
    return (
      <div>
        <h1 id='header'>
          <button className='new-game' onClick={this.reload.bind(this)}>New Game</button>
        </h1>
      <div>
        <section>
            <Choices name='rock' play={this.play}/>
            <Choices name='paper' play={this.play}/>
            <Choices name='scissors' play={this.play}/>
            <Choices name='lizard' play={this.play}/>
            <Choices name='spock' play={this.play}/>
            <Message games={this.state.games}/>
        </section>
        <Aside games={this.state.games}></Aside>
      </div>
      </div>
    )
  }
};

// jshint esversion:6
import React from 'react';
import Choices from './Choices.jsx';
import Aside from './Aside.jsx';

export default class Layout extends React.Component{
  constructor() {
    super();

    this.state = {
      computer: this.randomPick(),
      games: [],
    };

    this.randomPick = this.randomPick.bind(this);
    this.play = this.play.bind(this);
  }

  play(option) {
    var game = {};

    if (this.state.computer === option) {
      game.result = 1;
    } else if ( (this.state.computer === "Rock" && option === "Paper") ||
                (this.state.computer === "Paper" && option === "Scissors") ||
                (this.state.computer === "Scissors" && option === "Rock") ) {
      game.result = 2;
    } else {
      game.result = 0;
    }

    game.computer = this.state.computer;
    game.player = option;

    var games = this.state.games;
    games.push(game);

    var random = this.randomPick();

    this.setState({games, computer: random});
    console.log(this.state.games);
  }

  randomPick(){
    var weapons = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
		return weapons[Math.floor(Math.random() * weapons.length)];
  }

  render(){
    return (
      <div>
        <section>
          <Choices name='rock' play={this.play}/>
          <Choices name='paper'play={this.play}/>
          <Choices name='scissors' play={this.play}/>
          <Choices name='lizard' play={this.play}/>
          <Choices name='spock' play={this.play}/>
          <div className="result"></div>
        </section>
        <Aside></Aside>
      </div>
    )
  }
};

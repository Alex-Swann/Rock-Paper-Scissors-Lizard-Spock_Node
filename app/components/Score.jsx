// jshint esversion:6
import React from 'react';

var win = 0, tie = 0, loss = 0, total = 0;

export default class extends React.Component {
  componentWillReceiveProps(){
    win = 0, tie = 0, loss = 0;

    this.statCount();
    total = this.props.stats.length - 1;
    this.endGame();
  }

  endGame(){
    if(this.props.stats.length === 4){
      setTimeout(()=>{
        alert(this.message());
        this.reload();
      }, 100);
    }
  }

  message(){
    return win > loss ? 'You Won!!!' :
           loss > win ? "Computer Won! You Lost... :'-(" :
           "It's a tie!...zzzzzz!";
  }

  reload(){
    window.location.href = '/';
  }

  statCount(){
    for(var i = 1; i < this.props.stats.length; i++){
      this.props.stats[i].result === 'win' ? win++ :
      this.props.stats[i].result === 'tie' ? tie++ : loss++
    }
  }

  render(){
    return (
      <div className={this.props.name}>
        <div className="win">
    			<span>{win}</span>
    			<div>wins</div>
    		</div>

    		<div className="tie">
    			<span>{tie}</span>
    			<div>ties</div>
    		</div>

    		<div className="loss">
    			<span>{loss}</span>
    			<div>losses</div>
    		</div>

    		<div className="move">
    			<span>{this.props.stats.length - 1}</span>
    			<div>total</div>
    		</div>
      </div>
    );
  }
}

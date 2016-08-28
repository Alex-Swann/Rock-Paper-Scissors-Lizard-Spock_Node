// jshint esversion:6
import React from 'react';

var win = 0,
    tie = 0,
    loss = 0;

export default class extends React.Component {
  componentWillReceiveProps(){
        win = 0,
        tie = 0,
        loss = 0;

    for(var i = 1; i < this.props.stats.length; i++){
      if(this.props.stats[i].result === 'win'){
        win ++;
      } else {
        this.props.stats[i].result === 'tie' ? tie++ : loss++ ;
      }
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

// jshint esversion:6
import React from 'react';

export default class Score extends React.Component {
  render(){
    return (
      <div className={this.props.name}>
        <div className="win">
    			<span>0</span>
    			<div>wins</div>
    		</div>

    		<div className="tie">
    			<span>0</span>
    			<div>ties</div>
    		</div>

    		<div className="loss">
    			<span>0</span>
    			<div>losses</div>
    		</div>

    		<div className="move">
    			<span>0</span>
    			<div>total</div>
    		</div>
      </div>
    );
  }
}

// jshint esversion:6
import React from 'react';

export default class Choices extends React.Component{
  createAction(){

  }

  render(){
    const style = "fa fa-hand-"+ this.props.name + "-o";
    return (
      <span>
        <button id={this.props.name} data-play={this.props.name} onClick={this.props.play.bind(this, this.props.name)}>
          <i className={style}></i>
          <span>{this.props.name}</span>
        </button>
      </span>
    )
  }
}

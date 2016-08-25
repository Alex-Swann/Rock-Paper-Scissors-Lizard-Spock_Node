// jshint esversion:6
import React from 'react';

export default class Choices extends React.Component{
  render(){
    const style = "fa fa-hand-"+ this.props.name + "-o";
    return (
      <span onClick={this.createAction}>
        <button id={this.props.name} data-play={this.props.name}><i className={style}></i><span>{this.props.name}</span></button>
      </span>
    )
  }
}

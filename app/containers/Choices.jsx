// jshint esversion:6
import React from 'react';

export default class Choices extends React.Component{
  render(){
    return (
      <span onClick={this.createAction}>
        <button id="{this.props.name}" data-play="{this.props.name}"><i className="fa fa-hand-{this.props.name}-o"></i><span>{this.props.name}</span></button>
      </span>
    )
  }
}

// jshint esversion:6
import React from 'react';
import ReactDOM from 'react-dom';

var $options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

export class Choices extends React.Component{
  render(){
    return (
      <span>
        <button id="{this.props.name}" data-play="{this.props.name}"><i className="fa fa-hand-{this.props.name}-o"></i><span>{this.props.name}</span></button>
      </span>
    )
  }
}

export class ChoicesSection extends React.Component{
  render(){
    return (
      <section>
        <Choices name='rock'/>
        <Choices name='paper'/>
        <Choices name='scissors'/>
        <Choices name='lizard'/>
        <Choices name='spock'/>
        <div className="result"></div>
      </section>
    )
  }
};


ReactDOM.render(<ChoicesSection />, document.getElementById('root'));

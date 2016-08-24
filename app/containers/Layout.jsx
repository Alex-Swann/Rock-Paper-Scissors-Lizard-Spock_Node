// jshint esversion:6
import React from 'react';
import Choices from './Choices.jsx';
import Aside from './Aside.jsx';

export default class Layout extends React.Component{

  render(){
    return (
      <div>
        <section>
          <Choices name='rock'/>
          <Choices name='paper'/>
          <Choices name='scissors'/>
          <Choices name='lizard'/>
          <Choices name='spock'/>
          <div className="result"></div>
        </section>
        <Aside></Aside>
      </div>
    )
  }
};

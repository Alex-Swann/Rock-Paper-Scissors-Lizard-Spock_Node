// jshint esversion:6
import React from 'react';
import Legend from './Legend.jsx';
import Score from './Score.jsx';

export default class Aside extends React.Component {
  render(){
    return (
      <aside>
        <Legend name='legend'></Legend>
        <Score name='scoreboard'></Score>
      </aside>
    );
  }
}

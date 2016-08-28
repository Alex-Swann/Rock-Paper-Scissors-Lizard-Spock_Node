// jshint esversion:6
import React from 'react';
import Legend from './Legend.jsx';
import Score from './Score.jsx';

var children = [];

export default class Aside extends React.Component {
  componentWillReceiveProps(nextProps){
      var lastGame = this.props.games.slice(-1)[0];
      var item = "history-item " + lastGame.result;
      var imageOne = "fa fa-hand-" + lastGame.player + "-o";
      var imageTwo = "fa fa-hand-" + lastGame.computer + "-o";
      
      children.push(<div key={children.length} className={item}><i className={imageOne}></i><i className={imageTwo}></i></div>);
    }

  render(){
    return (
      <aside id='aside'>
        <Legend name='legend'/>
        {children}
        <Score name='scoreboard'/>
      </aside>
    );
  }
}

// jshint esversion:6
import React from 'react';
import Legend from './Legend.jsx';
import Score from './Score.jsx';

var children = [];

export default class extends React.Component {
  componentWillReceiveProps(nextProps){
      var lastGame = this.props.games.slice(-1)[0],
          item = "history-item " + lastGame.result,
          imageOne = "fa fa-hand-" + lastGame.player + "-o",
          imageTwo = "fa fa-hand-" + lastGame.computer + "-o";

      children.push(<div key={children.length} className={item}><i className={imageOne}></i><i className={imageTwo}></i></div>);
    }

  render(){
    return (
      <aside id='aside'>
        <Legend name='legend'/>
        {children}
        <Score name='scoreboard' stats={this.props.games}/>
      </aside>
    );
  }
}

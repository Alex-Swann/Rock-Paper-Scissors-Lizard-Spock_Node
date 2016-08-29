// jshint esversion:6
import React from 'react';

export default class extends React.Component {
  componentWillReceiveProps(nextProps){
      var message = this.message();
      var element = document.getElementById('result');
      this.resetMessageElement(element);
      element.appendChild(this.fadingDiv(message));
    }

  fadingDiv(message){
    var fadingMessage = document.createElement('div');
    fadingMessage.className = "animated fadeOutUp";
    fadingMessage.innerHTML = message;
    return fadingMessage;
  }

  message(){
    var lastGame = this.props.games.slice(-1)[0];

    return lastGame.result === 'tie' ? "It's a tie!" :
            lastGame.result === 'win' ? lastGame.player+' beat '+lastGame.computer :
            lastGame.computer+' beat '+lastGame.player;
  }

  resetMessageElement(element){
    while(element.firstChild) element.removeChild(element.firstChild);
  }

  render(){
    return (
      <div className="result" id='result'>
      </div>
    );
  }
}

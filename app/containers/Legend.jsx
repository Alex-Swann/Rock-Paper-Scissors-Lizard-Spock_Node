// jshint esversion:6
import React from 'react';

export default class Legend extends React.Component {
  render(){
    return (
      <div className={this.props.name}>
        <div className="me">
          <div>Me</div>
        </div>

        <div className="cpu">
          <div>CPU</div>
        </div>
      </div>
    );
  }
}

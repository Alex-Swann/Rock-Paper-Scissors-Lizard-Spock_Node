// jshint esversion:6
import React from 'react';

var res;

export default class extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      colour: ''
    };
  }

  click(){
    res = this.props.play(this.props.name);
    this.resultColor(res[1]);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.name !== res[0]){
      this.setState({ colour: ''});
    }
  }

  resultColor(result){
    this.setState({ colour: result });
  }

  render(){
    const style = "fa fa-hand-"+ this.props.name + "-o";
    return (
        <button data-play={this.props.name} onClick={this.click.bind(this)} className={this.state.colour} >
          <i className={style}></i>
          <span>{this.props.name}</span>
        </button>
    )
  }
}

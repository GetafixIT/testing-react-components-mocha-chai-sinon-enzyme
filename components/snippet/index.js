import React, { Component } from 'react';

class Snippet extends Component {
  constructor(props){
    super();
    this.clickCallBack = props.clickCallback ? props.clickCallback.bind(this) : null;
  }

  render(){
    return (
      <div>
        <h1>{ this.props.title || '' }</h1>
        <p>{ this.props.content || '' }</p>
        <button onClick={ this.clickCallBack }>{ this.props.buttonText || '' }</button>
      </div>
    );
  }
}

export default Snippet;

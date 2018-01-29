import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Snippet extends Component {
  constructor(props){
    super();
    this.clickCallBack = props.clickCallback ? props.clickCallback.bind(this) : null;
  }

  render(){
    const button = this.props.clickCallback ? <button onClick={ this.clickCallBack }>{ this.props.buttonText || '' }</button> : null;

    return (
      <div>
        <h1>{ this.props.title || '' }</h1>
        <p>{ this.props.content || '' }</p>
        { button }
      </div>
    );
  }
}

Snippet.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  clickCallback: PropTypes.func
};

export default Snippet;

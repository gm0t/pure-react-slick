import React, { Component } from 'react';
import Infinite from './infinite';
import Basic from './basic';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Basic</h1>
        <Basic />
        <h1>Infinite</h1>
        <Infinite />
      </div>
    )
  }
}
import React, { Component } from 'react';

export default class Detail extends Component {
  componentDidMount() {
    console.log(this.props.location.query);
  }
  render() {
    return (
      <div>
        <h1>Nama Buah : {this.props.location.query.nama}</h1>
        <h1>Warna :{this.props.location.query.warna}</h1>
        <h1>Rasa :{this.props.location.query.rasa}</h1>
      </div>
    );
  }
}

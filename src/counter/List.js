import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {
  state = {
    data: [
      {
        nama: 'apel',
        warna: 'merah',
        rasa: 'manis'
      },
      {
        nama: 'mangga',
        warna: 'hijau',
        rasa: 'masam'
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>Ini LIST</h1>
        <h1>Nama - Nama Buah</h1>
        <ul>
          {this.state.data.map((datum, key) => {
            return (
              <Link
                to={{
                  pathname: `/detail/${datum.nama}`,
                  query: {
                    nama: datum.nama,
                    warna: datum.warna,
                    rasa: datum.rasa
                  }
                }}>
                <li>{datum.nama}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    porto: []
  }

  componentDidMount() {
    axios.get(`https://my-json-server.typicode.com/ilhamwibisono13/porto.api/porto`)
      .then(res => {
        const porto = res.data;
        this.setState({ porto });
      })
  }

  render() {
    return (
      <ul>
        { this.state.porto.map(porto => <li>{porto.judul}</li>)}
      </ul>
    )
  }
}

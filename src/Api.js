import React, { Component } from 'react'

class App extends Component{

  state = {
    data : []
  }

  componentDidMount() {
    const url =
        'https://blue-harvest-mohini.herokuapp.com/api/v1/accounts';

    fetch(url)
    .then( result => result.json())
    .then( result => {
      this.setState({
       data : result
      })
    })
  }

  render(){
    const {data} = this.state;

    const result = data.map((entry, index) => {
      return ( <ul>
        <li key={index}>{entry.id}</li>
        <li key={index}>{entry.balance}</li>
        <li key={index}>{entry.type}</li>
        <li key={index}>{entry.createdDate}</li>
      </ul>)
    })

    return(<ul>{result}</ul>);
  }
}

export default App;
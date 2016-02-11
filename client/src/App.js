import React from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends React.Component {

  state = {
    finalRes: ''
  }
  
  getResponse = async () =>{
    const response = await fetch("/api/world"); 
    const data = await response.json(); 
    if(response.status !== 200) throw Error(data.message);
    return data;
  }

  componentDidMount(){
    this.getResponse()
    .then(res => {
      this.setState({finalRes: res});
    }) 
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div className="App">
      <h2>Calling the API</h2>
      <p>{this.state.finalRes.message}</p>
      </div>
    );
  }
}

export default App;

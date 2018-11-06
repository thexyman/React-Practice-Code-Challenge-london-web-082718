import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eatenSushi: [],
    budget: 100
  }

  // GET SUSHI
  getSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => this.setState({ sushi }))
  }

  componentDidMount() {
    this.getSushi()
  }
 

  // Add clicked sushi to array
  eatSushi = (sushi) => {
    if (sushi.price > this.state.budget) return 
    const eatenSushi = [sushi, ...this.state.eatenSushi]
    this.changeBudget(sushi)
    this.setState({ eatenSushi })
  }


  changeBudget = (sushi) => {
    this.state.budget = this.state.budget - sushi.price
  }

  handleClick = () => {
    const firstFour = [...this.state.sushi.slice(0, 4)]
    const newState = [...this.state.sushi.slice(5), firstFour]
    this.setState({ sushi: newState})
  }
  
  render() {
    return (
      <div className="app">
        <SushiContainer handleClick={this.handleClick} sushi={this.state.sushi.slice(0, 4)} eatSushi={this.eatSushi} eatenSushi={this.state.eatenSushi} />
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
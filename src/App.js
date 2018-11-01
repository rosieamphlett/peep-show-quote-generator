import React, { Component } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import QuoteBox from './components/QuoteBox';
import quotes from './data/quotes';
import './App.css';

class App extends Component {
  state = {
    index: 0,
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Button randomise={this.randomiseQuote} />
        <QuoteBox quote={quotes[this.state.index]}/>
      </div>
    );
  }

  randomiseQuote = () => {
    this.setState({
      index: Math.floor(Math.random() * (quotes.length))
    })
  }

}

export default App;

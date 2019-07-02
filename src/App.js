import React, { Component } from "react";
import './App.css';
import Rolling from "./Rolling";
import Footer from  "./Footer"



class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="title__header">Alea iacta est</h1>
        </header>
        <Rolling />
        <Footer />
      </div>
    );
  }
}
export default App;

import React, { Component, lazy, Suspense } from "react";
import './App.css';
import { GiDiceEightFacesEight } from 'react-icons/gi';
// import Rolling from "./Rolling";
import Footer from  "./Footer"
const Rolling = lazy(()=> import('./Rolling'))



class App extends Component {

  render() {
    return (
      <Suspense fallback={<div className="loading"><div className="animation" id="animation"><GiDiceEightFacesEight /></div></div>}>
      <div className="App">
        <header className="App-header">
          <h1 className="title__header">Alea iacta est</h1>
        </header>
        <Rolling />
        <Footer />
      </div>
      </Suspense>
    );
  }
}
export default App;

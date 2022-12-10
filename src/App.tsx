import React from 'react';
import './App.css';
import {Technologies} from "./Technologies";
import {Header} from "./Header";
import {Footer} from "./Footer";


function App() {
  return (
    <div className="App">
     <Technologies/>
     <Header/>
     <Footer/>
    </div>
  );
}

export default App;

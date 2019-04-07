import React, { Component } from 'react';
import './App.css';
import PickForm from './components/PickForm';
import Header from './header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChartData from './ChartData';
import BaseballScoreBoard from './components/BaseballScoreBoard.js';


class App extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentWillMount(){

  }



  render() {
    return (
      <div className="App"> 
      <Router>
      
        <Header></Header>

        <Route exact={true} path="/makepick" render={() => (
          <PickForm></PickForm>    
        )} />



        <Route exact={true} path="/resultdata" render={() => (
          <ChartData></ChartData>
        )} />

        <Route exact={true} path="/scores" render={() => (
          <BaseballScoreBoard></BaseballScoreBoard>
        )} />
       
        
        </Router>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import PickForm from './components/PickForm';
import Header from './header';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import ChartData from './ChartData';


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
       
        
        </Router>
      </div>
    );
  }
}

export default App;
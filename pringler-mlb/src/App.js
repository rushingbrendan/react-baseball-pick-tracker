import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import PickForm from './components/PickForm';
import MonthlyCalendar from './components/MonthlyCalendar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['Day 0', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets:[
          {
            label:'Earnings',
            data:[
              0,
              438,
              538, 
              638,
              438,
              638,     
              642,         
            ],
            backgroundColor:[
              'rgba(71, 203, 67, 1)',
              'rgba(71, 203, 67, 1)',
              'rgba(71, 203, 67, 1)',
              'rgba(71, 203, 67, 1)',
              'rgba(71, 203, 67, 1)',
              'rgba(71, 203, 67, 1)',
              'rgba(71, 203, 67, 1)',
              'rgba(71, 203, 67, 1)',
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">        
        <PickForm></PickForm>
        <br></br>
        <div className="container">
          <Chart chartData={this.state.chartData} legendPosition="bottom"/>
        </div>
        <div>
        <MonthlyCalendar></MonthlyCalendar>
        </div>
      </div>
    );
  }
}

export default App;
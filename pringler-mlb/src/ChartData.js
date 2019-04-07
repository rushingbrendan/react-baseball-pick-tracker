import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';


class ChartData extends Component {
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
        labels: ['Day 0', 'Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8', 'Day 9', 'Day 10'],
        datasets:[
          {
            label:'Earnings',
            data:[
              0,
              438,
              538, 
              638,
              438,
              538,     
              542,         
              642,
              418,
              370,
              263,              

            ],
            backgroundColor:[
              //'#FFE710',
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
        <div className="container">
          <Chart chartData={this.state.chartData} legendPosition="bottom"/>
        </div>
        <div>        
        </div>
      </div>
    );
  }
}

export default ChartData;
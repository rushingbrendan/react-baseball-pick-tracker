import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (<div>

<div className="container">
<Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text: '2019 MLB Season',
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
        </div>
      </div>
    )
  }
}

export default Chart;
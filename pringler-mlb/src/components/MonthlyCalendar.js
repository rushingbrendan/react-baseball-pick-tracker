import React, {Component} from 'react';
import '../css/bootstrap-grid.css';
import '../css/bootstrap.css';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      picks: [],
      year: 2019,
      month: 'March',
      day: 1,
      rating: 1,
      team: '',
      line: '',
      result: '',    
    }    
  }

  updateMonth(event) {
    this.setState({
      month: event.target.value
    });
    
    return true;
  }

  updateYear(event) {
    this.setState({
      year: event.target.value
    });
    
    return true;
  }

  updateDay(event) {
    this.setState({
      day: event.target.value
    });
    
    return true;
  }

  updateTeam(event) {
    this.setState({
      team: event.target.value
    });
    
    return true;
  }

  updateLine(event) {
    this.setState({
      line: event.target.value
    });
    
    return true;
  }

  updateRating(event) {
    this.setState({
      rating: event.target.value
    });
    
    return true;
  }

  updateResult(event) {
    this.setState({
      result: event.target.value
    });
    
    return true;
  }
  updatePicks(event) {

    // Create a new array based on current state:
    let currentPicks = [...this.state.picks];

    // Add item to it
    currentPicks.push({ 

      year: 2019,
      month: 'March',
      day: 1,
      rating: 1,
      team: 'Toronto Blue Jays',
      line: '-150',
      result: 'Win',

     })
    
    return true;
  }


  static defaultProps = {

  }


  createLineOdds() {
    let lineOdds = [];             

    for (let i = 500; i >= 100; i--) {             
        lineOdds.push(<option key={'+'+i} value={'+'+i}>{'+'+i}</option>);   
    }
    for (let i = 101; i <= 500; i++) {             
        lineOdds.push(<option key={'-'+i} value={'-'+i}>{'-'+i}</option>);   
    }
    return lineOdds;
    }  

    createDays(){
      let days = [];
      for (let i = 2; i<32; i++){
        days.push(<option key={i} value={i}>{i}</option>);
      }
      return days;
    }

  render(){
    return (      
    <div className="container">
    
    </div>
    )
  }
}

export default Chart;
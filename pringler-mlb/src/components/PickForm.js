import React, {Component} from 'react';
import '../css/bootstrap-grid.css';
import '../css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


library.add(faStar);
library.add(faSearch);
library.add(faCoffee);
library.add(faTimes);

class Chart extends Component{
  constructor(props){
    const months    = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const currentDate = new Date();
    super(props);
    this.state = {
      currentPicks: [],      
      year: currentDate.getFullYear(),
      month: months[currentDate.getMonth()],
      day: (currentDate.getDay() - 1),
      rating: 1,
      team: 0,
      line: 0,
      result: 0,
      earnings: 0,    
      pickNumber: 1,
      teamMessage: 'Select Team',
      lineMessage: 'Select Line',
      resultMessage: 'Select Result',
      updateTable: false
    }
  }

  componentDidUpdate() {
    if (this.state.updateTable === true){
     this.setState({
       updateTable: false
     });

     // Create a new array based on current state:
     var currentPicks = [...this.state.currentPicks];
  
     // Add item to it
     currentPicks.push({ 
 
       year: this.state.year,
       month: this.state.month,
       day: this.state.day,
       rating: this.state.rating,
       team: this.state.team,
       line: this.state.line,
       result: this.state.result,
       earnings: this.state.earnings,
       pickNumber: (this.state.currentPicks.length + 1),
 
      });
 
      this.setState({currentPicks});

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

  updateEarnings(event) {

    var currentEarnings = 0;
    const currentLine = this.state.line.replace(/\D/g,'');    


    if (this.state.result === "Win"){
      if (this.state.line.startsWith('+')){
        currentEarnings = currentLine * this.state.rating;        
      }
      else if (this.state.line.startsWith('-')){
        currentEarnings = this.state.rating * 100;
      }
    }
    else if (this.state.result === "Lose"){
      if (this.state.line.startsWith('+')){
        currentEarnings = this.state.rating * -100;        
      }
      else if (this.state.line.startsWith('-')){
        currentEarnings = this.state.rating * -currentLine;
        
      }
    }
    else if (this.state.result === "Push"){
      currentEarnings = 0;
    } 
        
    this.setState({
      earnings: currentEarnings,
      updateTable: true

    });  
    
  }

  displayUserMessages(){

    var formErrorCount = 0;

    //check team value to make sure data is valid
    if ((this.state.team === 0) || (this.state.team ==="Choose..")){
      this.setState({teamMessage: 'Select Team'});
      formErrorCount++;
    }
    else{
      this.setState({teamMessage: ''});
    }

    //check line value to make sure data is valid
    if ((this.state.line === 0) || (this.state.line == "Choose...")){
      this.setState({lineMessage: 'Select Line'});
      formErrorCount++;
    }
    else{
      this.setState({lineMessage: ''});
    }
    
    //check result value to make sure data is valid
    if ((this.state.result === 0) || (this.state.result === "Choose...")){
      this.setState({resultMessage: 'Select Result'});
      formErrorCount++;
    }
    else{
      this.setState({resultMessage: ''});
    }


    return formErrorCount;

  }
  

  updatePicks(event) {

    if (this.displayUserMessages() === 0){

      this.updateEarnings();    
      
    }
    
    //return true;
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
      for (let i = 1; i<32; i++){
        days.push(<option key={i} value={i}>{i}</option>);
      }
      return days;
    }

    createTeams(){
      let teamOutput = [];
      const teams = ["Arizona Diamondbacks",
      "Atlanta Braves",
      "Baltimore Orioles",
      "Boston Red Sox",
      "Chicago Cubs",
      "Chicago White Sox",
      "Cincinnati Reds",
      "Cleveland Indians",
      "Colorado Rockies",
      "Detroit Tigers",
      "Miami Marlins",
      "Houston Astros",
      "Kansas City Royals",
      "Los Angeles Angels of Anaheim",
      "Los Angeles Dodgers",
      "Milwaukee Brewers",
      "Minnesota Twins",
      "New York Mets",
      "New York Yankees",
      "Oakland Athletics",
      "Philadelphia Phillies",
      "Pittsburgh Pirates",
      "Saint (St.) Louis Cardinals",
      "San Diego Padres",
      "San Francisco Giants",
      "Seattle Mariners",
      "Tampa Bay Rays",
      "Texas Rangers",
      "Toronto Blue Jays",
      "Washington Nationals"];

      for (var i = 0; i < teams.length; i++){
        teamOutput.push(<option key={teams[i]} value={teams[i]}>{teams[i]}</option>);
      }

      return teamOutput;

    }

    removeItemFromTable(inputPickNumber){
          
      // Create a new array based on current state:
      var currentPicks = [];

      currentPicks = this.state.currentPicks.filter(function (el) {
        return el.pickNumber !== inputPickNumber

      });

      for (var i = 0; i<currentPicks.length; i++){
        currentPicks[i].pickNumber = i + 1;
      }

      this.setState({currentPicks});
          
    }

    displayPickTable(){

      return ((this.state.currentPicks.map(tableRow =>
        <tr key={"tablerow"+tableRow.pickNumber}>
          <th scope="row">{tableRow.pickNumber}</th>
          <td>{tableRow.year}</td>
          <td>{tableRow.month}</td>
          <td>{tableRow.day}</td>
          <td>{tableRow.rating}</td>
          <td>{tableRow.team}</td>
          <td>{tableRow.line}</td>
          <td>{tableRow.result}</td>
          <td>{tableRow.earnings}</td>
          <td><FontAwesomeIcon size="1x" icon="times" color="#ff6961" onClick={(e) => this.removeItemFromTable(tableRow.pickNumber)}/> </td>
        </tr>        
        )
        
        ))

    }


  render(){
    return (
      <div className="pickForm">
       <form>
  <div className="container">
  <br>
  </br>
  <div className="form-row">
  <div className="col-md-1 mb-1">
    <label >Year</label>
    <select className="form-control" id="yearInput" onChange={(e) => this.updateYear(e)}>
      <option defaultValue={this.state.year}>{this.state.year}</option>
    </select>
  </div>
    <div className="col-md-2 mb-2">
      <label >Month</label>
      <select className="form-control" id="monthInput" onChange={(e) => this.updateMonth(e)}>
        <option defaultValue={this.state.month}>{this.state.month}</option>
        <option value='March'>March</option>
        <option value='April'>April</option>
        <option value='May'>May</option>
        <option value='June'>June</option>
        <option value='July'>July</option>
        <option value='August'>August</option>
        <option value='September'>September</option>
        <option value='October'>October</option>
      </select>
    </div>
    <div className="col-md-1 mb-1">
      <label >Day</label>
      <select className="form-control" id="dayInput" onChange={(e) => this.updateDay(e)}>
        <option defaultValue={this.state.day}>{this.state.day}</option>
        {this.createDays()}
      </select>
    </div>
    <div className="col-md-1 mb-1">
      <label >Rating</label>
      <select className="form-control" id="ratingInput" onChange={(e) => this.updateRating(e)}>
        <option defaultValue='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
      </select>
    </div>
    <div className="col-md-3 mb-3">
      <label >Team</label>
      <select className="form-control" id="teamInput" onChange={(e) => this.updateTeam(e)}>
        <option defaultValue='Choose...' >Choose...</option>
        {this.createTeams()}      
      </select>
      <p class="text-danger">{this.state.teamMessage}</p>            
    </div>
    <div className="col-md-1 mb-1">
      <label >Line</label>
      <select className="form-control" id="lineInput" onChange={(e) => this.updateLine(e)}>
        <option defaultValue="Choose..." >Choose...</option>
        {this.createLineOdds()}
      </select>
      <p class="text-danger">{this.state.lineMessage}</p>      
    </div>
    <div className="col-md-1 mb-1">
      <label >Result</label>
      <select className="form-control" id="resultInput" onChange={(e) => this.updateResult(e)}>
        <option defaultValue="Choose..." >Choose...</option>
        <option value="Win" >Win</option>
        <option value="Lose" >Lose</option>
        <option value="Push" >Push</option>      
      </select>
      <p class="text-danger">{this.state.resultMessage}</p>      
    </div>
    <div className="col-md-1 mb-1">     
      <label >Confirm</label>   
      <button type="button" className="btn btn-success" onClick={(e) => this.updatePicks(e)}>Add Selection</button>
    </div>
</div>
<br></br>
<br></br>
<h2>Pending Picks</h2>

  
  <table className="table table-sm">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Year</th>
      <th scope="col">Month</th>
      <th scope="col">Day</th>
      <th scope="col">Rating</th>
      <th scope="col">Team</th>
      <th scope="col">Line</th>
      <th scope="col">Result</th>
      <th scope="col">Earnings</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
{this.displayPickTable()}
  </tbody>  
</table>

</div>
</form>
      
      </div>
    )
  }
}

export default Chart;
import React from "react";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import '../css/baseballScoreEvent.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle);
class BaseballScoreEvent extends React.Component{


constructor(props) {

    
    super(props);
    this.state = {

    };
}

componentDidMount(){
    //fetch('/users/2015/1')
    //.then(res => res.json())
    //.then(dataArray => this.setState({scoreData: dataArray.data})); // teamData is an array, not teamNames

    // fetch('/users/teamNames')
    // .then(res => res.json())
    // .then(teamNames => this.setState({teams: teamNames.teamData})); // teamData is an array, not teamNames
    
}

/* Triggered when season select menu is changed */
handleButtonClick = (event) => {
    
}

displayInnings(){
    let innings = [];
    for (let i = 1; i<this.props.gameData.homeTeamScores.length + 1; i++){
    //for (let i = 1; i<10; i++){
      innings.push(<td><div className="baseballScoreFont">{i}</div></td>);
    }
    return innings;
}

displayHomeTeamScores(){
    return(
        this.props.gameData.homeTeamScores.map(currentHomeTeamScore =>
            <td><div className="baseballScoreFont">{currentHomeTeamScore}</div></td>
        ))    
}
displayAwayTeamScores(){
    return(
        this.props.gameData.awayTeamScores.map(currentAwayTeamScore =>
            <td><div className="baseballScoreFont">{currentAwayTeamScore}</div></td>
        ))    
}


render(){


    

return (
    <div className="baseballScoreContainer">    
        <table border="0px" className="baseballScoreTableTop">
            <tr className="baseballScoreSpaceAboveQuarters"></tr>
            <tr>            
                <td><div className="baseballScoreHeaderSpace"></div></td>                
                {this.displayInnings()} 
                <td><div className="baseballScoreHeaderTotalSpace"></div></td>        
            </tr>
        </table>
        <div className="spaceUnderQuarterTitles"></div>
        <hr className="baseballScoreLineBreak"></hr>
        <table border="0px">
            <tr>            
                <td><div className="baseballTeamNameFont">{this.props.gameData.awayTeam} <FontAwesomeIcon size="1x" icon="check-circle" color="#85bb65"/></div></td>
                {this.displayAwayTeamScores()}        
                <td><div className="baseballTotalScoreFont">{this.props.gameData.awayTeamScores.reduce((a, b) => a + b, 0)}</div></td>    
            </tr>
            <tr>            
                <td><div className="baseballTeamNameFont">{this.props.gameData.homeTeam}</div></td>
                {this.displayHomeTeamScores()}    
                <td><div className="baseballTotalScoreFont">{this.props.gameData.homeTeamScores.reduce((a, b) => a + b, 0)}</div></td>           
            </tr>        
        </table>
        
    </div>
)}}

export default BaseballScoreEvent;

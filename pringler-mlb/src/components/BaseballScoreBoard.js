import React, {Component} from 'react';
import '../css/bootstrap-grid.css';
import '../css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BaseballScoreEvent from './BaseballScoreEvent.js';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faSearch} from '@fortawesome/free-solid-svg-icons';
// import { faCoffee} from '@fortawesome/free-solid-svg-icons';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
 //import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

 //library.add(faCheckCircle);
// library.add(faStar);
// library.add(faSearch);
// library.add(faCoffee);
// library.add(faTimes);

class BaseballScoreBoard extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


  render(){

    const scoreData =  [
        { homeTeam:"TOR",  homeTeamScores:[ 0,1,0,0,2,0,1,4,4 ], 
          awayTeam: "BAL", awayTeamLine: '+115', awayTeamScores:[ 0,1,0,0,2,0,1,0,0 ],
          gameTotal: '9.5' },

        { homeTeam:"NYY",  homeTeamScores:[ 0,1,1,2,1,0,1,3,1 ], 
          awayTeam: "NYM", awayTeamLine: '-130', awayTeamScores:[ 0,1,0,0,2,0,1,1,0 ],
          gameTotal: '8.5' },

        { homeTeam:"BOS",  homeTeamScores:[ 0,1,1,2,1,0,1,3,1,1,1,2,1,0,1,3,1 ], 
          awayTeam: "TB", awayTeamLine: '-130', awayTeamScores:[ 0,1,0,0,2,0,1,1,0,1,1,2,1,0,1,3,1 ],
          gameTotal: '8.5' },
      ];


    return (
        <div>          
          <br></br>
          {scoreData.map(currentScoreData =>
            <BaseballScoreEvent gameData={currentScoreData}></BaseballScoreEvent>
          )}    
      </div>

    )
  }
}

export default BaseballScoreBoard;
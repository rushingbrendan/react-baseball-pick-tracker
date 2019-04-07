import React, { Component } from 'react';
import '../App.css';
import '../css/Header.css';


class Header extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  componentWillMount(){

  }



  render() {
    return (
      
<div>
<nav class="navbar navbar-expand-lg navbar-custom">
  <a class="navbar-brand" href="#">Baseball Score Tracker</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/scores/">Scores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/makepick/">Make Pick</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/resultdata/">Result Data</a>
      </li>
    </ul>
  </div>
</nav>
</div>
    );
  }
}

export default Header;
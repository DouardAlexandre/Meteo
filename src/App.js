import React, { Component } from 'react';
import './App.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      town: 'rennes'

    }
    this.handleChange = this.handleChange.bind(this);
  };
  

  handleChange = (e) => {
    e.preventDefault();
     let Url= 'https://api.openweathermap.org/data/2.5/weather?&lang=fr&units=metric&appid=ed213ad38f67ad4fab31113e8018ab70&q=';
    this.setState({
      town: this.refs.ville.value
    }, () =>
    fetch(Url + this.state.town,{
      mode:'cors',
      method:'GET'
    }).then( res => res.json())
    .then( data => { 
      this.setState({
       data : data,

       iconUrl : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
     });

    }))
    //clear input

  }
  
  componentDidMount() {

    let Url= 'https://api.openweathermap.org/data/2.5/weather?&lang=fr&units=metric&appid=ed213ad38f67ad4fab31113e8018ab70&q=';
    fetch(Url + this.state.town,{
      mode:'cors',
      method:'GET'
    }).then( res => res.json())
    .then( data => { 
      this.setState({
       data : data,

       iconUrl : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
     });

    });
  }
  
      // shouldComponentUpdate(nextState) {
      //  const differentName = this.state.name !== nextState.name;
      //   return differentName;
      // }
      render() {

        if (!this.state.data) {
          return <div>Loading</div>;
        }

        return (
          <div className="App">
          <div className="wrap">   </div>
          <div className="logo">
          <i className="fa fa-sun-o back" aria-hidden="true"></i>
          </div>
          <i className="fa fa-sun-o" aria-hidden="true"></i>
          <section className="section">
          <form ref='city' onSubmit={this.handleChange.bind(this)}>
          <input ref='ville' placeholder='  Ville'></input>
          <input id="submitBtn" type="submit" />
          </form>
          <p>
          <img src={this.state.iconUrl}></img>
          {this.state.data.name }
          </p>
          <p>{this.state.data.weather[0].description}</p>
          <p>humidité: {this.state.data.main.humidity }%</p>
          <p>{this.state.data.main.temp }°C</p>
          </section>


          </div>
          );
      }
    }


    export default App;




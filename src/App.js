import React, { Component } from 'react';
import './App.css';
import './font/font-awesome-4.7.0/css/font-awesome.min.css';
import './css/weather-icons.css';

class App extends Component {
  constructor(props){
    super(props);
    //like setinitial state --> constructor
    this.state={
      town: 'rennes'
    }
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
    this.refs.ville.value='';
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
      render() {

        if (!this.state.data) {
          return <div className="loading">
                   <div>Loading...</div>
                 </div>;
        }

        return (
          <div className="App">
            <div className="wrap"></div>
            <div className="logo">
            <i className="fa fa-sun-o back" aria-hidden="true"></i>

            </div>
            <i className="fa fa-sun-o" aria-hidden="true"></i>
            <section className="section">
              <form ref='city' onSubmit={this.handleChange.bind(this)}>
                <input ref='ville' placeholder='  Ville'>
                </input>
                 <div className="blue"></div>
                <input id="submitBtn" type="submit" value="Go" />

              </form>
              <div className="townName">
                {this.state.data.name }
                <img src={this.state.iconUrl} alt="temps icon"></img>
              </div>
               <p className="humidity">{this.state.data.main.humidity }% d'humidité.</p>
              <div className="temperature">
                {this.state.data.main.temp }°C
              </div>
              <i className="wi wi-strong-wind"></i>
              <p className="windSpeed">{this.state.data.wind.speed } m/s.</p>
            </section>
          </div>
          );
      }
    }


    export default App;




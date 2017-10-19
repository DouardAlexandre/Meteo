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
              <div class="townName">
                {this.state.data.name }
                <img src={this.state.iconUrl}></img>
              </div>
              <div class="temperature">
               {/* {this.state.data.weather[0].description} &nbsp;        */}
                {this.state.data.main.temp }°C
              </div>
              <p className="humidity">{this.state.data.main.humidity }% d'humidité.</p>
              <p className="windSpeed">vent à {this.state.data.wind.speed } m/s.</p>
            </section>


          </div>
          );
      }
    }


    export default App;




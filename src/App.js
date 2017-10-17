import React, { Component } from 'react';
import './App.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={}
     //let data={}
  };
  
  componentDidMount() {

    let Url= 'https://api.openweathermap.org/data/2.5/weather?q=Rennes&lang=fr&units=metric&appid=ed213ad38f67ad4fab31113e8018ab70'
   fetch(Url,{
      mode:'cors',
      method:'GET'
   }).then( res => res.json())
     .then( data => {
      console.log(data); 
      this.setState({
             data : data,
             iconUrl : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            });
      });
  }
  
  render() {
    
    if (!this.state.data) {
      return <div>Loading</div>;
    }

    return (
      <div className="App">
     
        <div className="logo">
          <i className="fa fa-sun-o back" aria-hidden="true"></i>
        </div>
        <i className="fa fa-sun-o" aria-hidden="true"></i>
       <section className="section">
       <form >
          <input placeholder='  Ville'></input>
          <input id="submitBtn" type="submit" />
       </form>
             <p>
                <img src={this.state.iconUrl}></img>
                {this.state.data.name }
            </p>
            <p>{this.state.data.weather[0].description }</p>
            <p>humidité: {this.state.data.main.humidity }%</p>
            <p>{this.state.data.main.temp }°C</p>
        </section>

      </div>
    );
  }
}
  

export default App;




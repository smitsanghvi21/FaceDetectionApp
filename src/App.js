import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import UrlBox from './components/UrlBox/UrlBox';
import Rank from './components/Rank/Rank';
import FaceReco from './components/FaceReco/FaceReco';
import Signin from './components/Signin/Signin';
import './App.css';
const Clarifai = require('clarifai');


const app = new Clarifai.App({
  apiKey: '5bcd2bcbf31e410e8d15c3ca65e0bb9c'
 });


 const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
    constructor(){
      super();

      this.state={
        input:'',
        url:'',
        box:'',
        route:'signin'
      };
      this.onInputChange=this.onInputChange.bind(this);
      this.onInputSubmit=this.onInputSubmit.bind(this);
    }

    onRouteChange=()=>{
      this.setState({
        route:'home'
      });
    }
    //calculating the box for face detection that will appear in the image
    calculateFaceLocation = (data) => {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('image');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    }

    displayFaceBox = (box) => {
      this.setState(
        {
          box: box
        });
    }
//set the new input
    onInputChange(event){
     this.setState({
       input:event.target.value
     })
    }
//update the url with the input
    onInputSubmit(){
      this.setState({
        url:this.state.input
      });
      //console.log("hihih");
      app.models
      .predict(
      Clarifai.FACE_DETECT_MODEL,
          this.state.input)
      
      .then(response=>this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err=>console.log(err));
          
    }
  
  render() {
    
    //added a signin route. If its not signin then will show all the components
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route=='signin'?
        <Signin onRouteChange={this.onRouteChange}/>
        :
        <div>
          <Logo/>
          <UrlBox onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit}/>
          <Rank/>
          <FaceReco url={this.state.url} box={this.state.box}/>
        </div>
        }
      </div>
    );
  }
}

export default App;
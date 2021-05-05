import React, { Component } from "react";
import HogDetails from './HogDetails'


class HogCard extends Component {

  state = {
    displayDetails: false
  }

  toggleDetails = ()=>{
    this.setState({
      displayDetails: !this.state.displayDetails
    })
  }

   
  render() {


    const imgs = this.props.hog.name.toLowerCase().replaceAll(' ', '_')
    const imgsSrc = require(`../hog-imgs/${imgs}.jpg`)

    // console.log(this.props.hog.name)
    // console.log(imgsSrc)
    return (
      <div onClick={()=> this.toggleDetails()}>
        <h2>{this.props.hog.name}</h2>
        <img src={imgsSrc}/>
        {this.state.displayDetails ? <HogDetails hog={this.props.hog}/> : null}
        <hr/>
      </div>
    );
  }
}

export default HogCard;
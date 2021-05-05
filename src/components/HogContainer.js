import React, { Component } from "react";
import HogCard from './HogCard'


class HogContainer extends Component { 
  // mapping over the hogsData arr and sending each obj to the card
  hogRender = ()=>{
    return this.props.hogsData.map((hog) => (
    <HogCard hog={hog}/>
    ))
  }
  
  render() {
  
    return (
      <div>
       {this.hogRender()}
      </div>
    );
  }
}

export default HogContainer;

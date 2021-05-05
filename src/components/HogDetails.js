import React, { Component } from "react";



export default class HogDetails extends Component{



  render(){

    const {specialty, weight, greased, ['highest medal achieved']: medal} = this.props.hog
    
    // console.log(this.props.hog)
    return(
      <div>
        <br />
        {weight}
        <br />
        {specialty}
        <br />
        {greased}
        <br />
        {medal}
      </div>
    )
  }
}
 
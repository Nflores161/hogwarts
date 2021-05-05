import React, { Component } from "react";


class Filter extends Component {

  
 



  render() {
    return (
      <div >
        <button onClick={()=> this.props.showGreased()}>Greased Hogs</button>
        <select onChange={(event)=> this.props.filterHogs(event)}>
          <option disabled selected>Sort</option>
          <option value='weight'>Sort by Weight</option>
          <option value='name'>Sort by Name</option>
        </select>
        <button onClick={()=> this.props.showAll()}>Show All hogs</button>
      </div>
    );
  }
}

export default Filter;
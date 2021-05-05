import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from './Filter'





class App extends Component {

  state = {
    hogs: hogs
  }

  showGreased = () => {
    this.setState({
      hogs: this.state.hogs.filter(hog => hog.greased)
    })
  }

  showAll = ()=>{
    this.setState({
      hogs: hogs
    })
  }

  filterHogs = (event) => {
    // console.log(event.target.value)
    if (event.target.value === 'name'){
      this.setState({hogs: [...this.state.hogs].sort((a,b) => a.name.localeCompare(b.name))})
    }else{
      this.setState({hogs: [...this.state.hogs].sort((a,b) => a.weight - b.weight)})}

  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Filter filterHogs={this.filterHogs} showAll={this.showAll} showGreased={this.showGreased}/> 
        <HogContainer hogsData={this.state.hogs} />
      </div>
    );
  }
}

export default App;

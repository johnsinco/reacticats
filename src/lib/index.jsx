import React, { Component } from "react";

class ReactiCats extends Component {
  handleClick = () => {
    this.forceUpdate();
  };

  constructor(props) {
    super(props);
    this.state = {catid: 11111}
  }
  componentWillMount() {
    this.interval = setInterval(() => {
      console.log("reloading...");
      this.setState({catid: Math.floor(Math.random() * 100)});

      this.forceUpdate();
    }, 10000);
  }

  render() {
    var caturl = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small&foo=" + this.state.catid;
    return (
      <img src={caturl}></img>
    );
  }
}

export default ReactiCats;

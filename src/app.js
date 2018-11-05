import React, { Component } from "react";
import Router from "./router";
import Header from "./general/header"

class App extends Component {
  render() {
    return (
      <div className="page__div">
        <Header />
        <Router />
      </div>
    );
  }
}

export default App;

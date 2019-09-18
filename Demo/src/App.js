import React from "react";

import "./App.css";

import ReactIcons from "./Component/@ReactIcons";

function App() {
  return (
    <div className="App">
      Basic Usage
      <span className="icon-center">
        FontAwesome Icon
        <ReactIcons iconName="fa fa-industry" iconStyle="icon-style" />
      </span>
      <span className="icon-center">
        Material Icon
        <ReactIcons
          iconName="material-icons"
          iconStyle="icon-style"
          className="zoom_out_map"
        />
      </span>
      <span className="icon-center">
        Feather Icon
        <ReactIcons
          iconName="feather feather-cloud-rain"
          iconStyle="icon-style"
        />
      </span>
      <span className="icon-center">
        Linea Icons
        <ReactIcons iconName="linea linea-basic-world" iconStyle="icon-style" />
      </span>
      <span className="icon-center">
        IonIcons
        <ReactIcons iconName="ion-ios-pulse" iconStyle="icon-style" />
      </span>
    </div>
  );
}

export default App;

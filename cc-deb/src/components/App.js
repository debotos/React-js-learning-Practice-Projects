import React, { Component } from "react";
import AppBar from "material-ui/AppBar";

import Box from "./Box";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title="Currency Converter" />
        <Box />
      </div>
    );
  }
}

export default App;

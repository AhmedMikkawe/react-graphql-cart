import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }
}

export default App;

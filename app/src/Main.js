import React, { Component } from "react";
import {
  Route,
  NavLink,
  BrowserRouter,
  HashRouter
} from "react-router-dom";
import Home from './components/HomeComponent';
import BarChartComponent from './components/BarChartComponent';
import LineChartComponent from './components/LineChartComponent';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
            <h1>Utility Data Viewer</h1>
            <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/bar">Bar</NavLink></li>
                <li><NavLink to="/line">Line</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/bar" component={BarChartComponent}/>
                <Route path="/line" component={LineChartComponent}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;
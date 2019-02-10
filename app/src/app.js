import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from "./Main";
import * as serviceWorker from './serviceWorker';
import BarChartComponent from './components/BarChartComponent';
import LineChartComponent from './components/LineChartComponent';


ReactDOM.render(
  <Main/>, 
  document.getElementById("app")
);
// export default App;

serviceWorker.unregister();

module.hot.accept();
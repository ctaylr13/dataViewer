import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import * as serviceWorker from './serviceWorker';
import UtilData from './posts/utilData';

const title = 'Utility Data';


class App extends Component {
    render () {
        return (
            <div className='App'>
                <p>Hello World</p>
                <p>{title}</p>
                <UtilData />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;

serviceWorker.unregister();

module.hot.accept();
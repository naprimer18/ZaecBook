import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Registretion from './Registration'
import Fishing from './WatchFishing'
import CreateGame from './CreateGame'
import Main from './Main'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const store = createStore(reduser ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function reduser(state = [] ,action) {
	if(action.type ==="ADD") {
		   return [
      ...state,
      action.payload
    ];
  }
  console.log(state);
  return state;
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <div className="mainlink">
            <ul>
               <li><Link to="Main"><button className = "buttonEnter">Main</button></Link></li>
               <li><Link to="/"> <button className = "buttonEnter">Chat</button></Link></li>
                <li><Link to="/Play in Game"><button className = "buttonEnter">Play in Game</button></Link></li>
               <li><Link to="/watch fishing"><button className = "buttonEnter">Watch fishing</button></Link> </li>
               <li><Link to="/about"><button className = "buttonEnter">About</button></Link></li>
            </ul>
        </div>   
              <Route exact path="/" component={App} />
              <Route path="/about" component={Registretion}/>
              <Route path="/watch fishing" component={Fishing}/>
              <Route path="/Play in Game" component={CreateGame}/>
              <Route path="/Main" component={Main}/>
        </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

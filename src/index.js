import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import reducer from './reducers/postFeed'
// import configureStore from "./store/configureStore";
// import Routes from "./Routes";


const store = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>, 
	document.getElementById("react-root"));

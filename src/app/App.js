import React, { Component } from "react";
import {Router, Route ,IndexRoute, browserHistory} from "react-router";
import { View as CommonHeader } from "../components/commonHeader/";
import { View as Index } from "../pages/index/";
import { View as Detail } from "../pages/detail/";
import { View as List } from "../pages/list/";
import { Provider } from "react-redux";
import store from "./store";
import "./app.css";
import "./swiper.css";

export default class App extends Component {
	
	render(){
		return(
			<div className="boss">
				<Provider store={store}>
					<Router history={browserHistory}>
						<Route path="/" component={CommonHeader}>
							<IndexRoute component={Index}></IndexRoute>
							<Route path="detail/:id" component={Detail}></Route>
							<Route path="list/:id" component={List}></Route>
						</Route>
					</Router>
				</Provider>
			</div>
		)
	}
}


















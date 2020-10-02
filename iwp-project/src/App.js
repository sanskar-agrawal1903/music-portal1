import React , {Component} from 'react';
import {BrowserRouter as Router , Link , Switch , Route} from 'react-router-dom';

import "./sass/main.scss"

import Login from './Components/MainPage/Login';
import Header from './Components/MainPage/Header';
import MusicEveryOne from './Components/MainPage/MusicEveryOne';
import Subscription from './Components/MainPage/Subscription';
import Register from './Components/MainPage/Register';
import ViewAllPlaylist from './Components/SecondPage/ViewAllPlaylist';
import InDecisionApp from "./Components/ThirdPage/InDecisionApp";
import AppRouter from './routers/AppRouter';

class App extends Component{

	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		login : true,
	// 		apiResponse : ""
	// 	}
	// }

	state = {
		login : true
	}

	changeLoginState = () => {
		this.setState((prevState) => ({
			login : !(prevState.login)
		}))
	}

	// callApi(){
		// fetch("http://localhost:9000/testApi")
		// .then(res => res.text())
		// .then(res => this.setState({apiResponse : res}))
	// }

	// componentWillMount(){
	// 	this.callApi();
	// }

	render(){
		return(
			<div>

				{/* <Header/>
			<main>
				<MusicEveryOne />
				<Subscription />
				{(this.state.login)?<Login changeLoginState={this.changeLoginState}/> : <Register  changeLoginState={this.changeLoginState}/>}
			</main> */}

				{/* <ViewAllPlaylist /> */}

				{/* <InDecisionApp /> */}
				
				<AppRouter />
			
			</div>
		)
	}
}

export default App;

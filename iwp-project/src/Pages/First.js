import React , {Component} from 'react';

import "../sass/main.scss"

import Login from '../Components/MainPage/Login';
import Header from '../Components/MainPage/Header';
import MusicEveryOne from '../Components/MainPage/MusicEveryOne';
import Subscription from '../Components/MainPage/Subscription';
import Register from '../Components/MainPage/Register';

class First extends Component{

	state = {
		login : true,
		user_id:undefined
	}

	changeUserId = (newUserId)=>{
		this.setState(()=>({
			user_id : newUserId
		}))
		console.log(newUserId);
	}

	changeLoginState = () => {
		this.setState((prevState) => ({
			login : !(prevState.login)
		}))
	}

	render(){
		return(
		<div>
			<Header/>
		<main>
			<MusicEveryOne />
			<Subscription />
			{(this.state.login)?<Login 
									changeLoginState={this.changeLoginState}
									changeUserId={this.changeUserId}
								/> : 
								<Register  
									changeLoginState={this.changeLoginState}
									changeUserId={this.changeUserId}
								/>
			}
		</main>

			{/* <ViewAllPlaylist /> */}

			{/* <InDecisionApp /> */}
			
		
		</div>
		)
	}
}

export default First;

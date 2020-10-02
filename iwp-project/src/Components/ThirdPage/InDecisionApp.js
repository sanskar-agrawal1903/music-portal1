import React from "react";
import axios from "axios";


import AddOptions from "./AddOptions";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";


class InDecisionApp extends React.Component{

	state = {
		title : "Harshit Goel",
		subTitle : "Here is the list of task that i have added",
		options : this.props.options,
		selectedOption : undefined
	}

	clearSelectedOption = () => {
		this.setState(() => ({
			selectedOption : undefined
		}))
	}

	deleteHandleFunction = () => {
		let q = window.location.href.split("viewPlaylist/");
		q = q[1].split("/");
		// console.log(q);
		const email = q[0];
		const id = q[1];
		axios.post(`/item/removeAll/${email}/${id}` , {})
			.then(result => {
				this.setState(()=>({
					//here we are implicitly returning the new oject by making use of the short hand syntax of arrow functions
						options : []
					})
				)
			})
			.catch(error => {
				alert("some error has occured");
			})
		
	}

	handleDeleteSingle = (opt1) => {
		
		let q = window.location.href.split("viewPlaylist/");
		q = q[1].split("/");
		// console.log(q);
		const email = q[0];
		const id = q[1];

		axios.post(`/items/${email}/${id}/remove/${opt1}` , {})
			.then(result => {
				console.log("deleted successfully");
				this.setState((prevState)=>({
					//if not equal then dont remove it
					options : prevState.options.filter((opt2) => opt1!==opt2)
				}))
			})
			.catch(error => {
				alert("please try again later");
			})

		
	}

	chooseTask = () => {
		const index = Math.floor(Math.random()*this.state.options.length);
		// alert(this.state.options[index]);
		this.setState((prevState) => ({
			selectedOption : prevState.options[index]
		}))
	}

	handleAddOption = (option) => {
		//validating the option
		if(!option){
			return 'Enter a valid task';
		}
		else if(this.state.options.indexOf(option)>-1){
			//checking for duplicacy
			//if already present then it will return the index 0-based indexing
			//if not exist then it will return -1
			return 'Task already present';
		}

		let q = window.location.href.split("viewPlaylist/");
		q = q[1].split("/");
		// console.log(q);
		const email = q[0];
		const id = q[1];

		axios.post(`/items/${email}/${id}/${option}` , {})
			.then(result => {
				this.setState((prevState)=>({
						//by doing this we are actually changing the prevState which is not a good practice
						// options : prevState.options.push(option)
		
						//so we can make use of concat operations which doesnt change the value of neither of the operands but instead return a brand new Array
						options : prevState.options.concat([option])
					})
				)
			})
			.catch(error => {
				alert("some error has occured");
			})

		// this.setState((prevState)=>({
		// 		//by doing this we are actually changing the prevState which is not a good practice
		// 		// options : prevState.options.push(option)

		// 		//so we can make use of concat operations which doesnt change the value of neither of the operands but instead return a brand new Array
		// 		options : prevState.options.concat([option])
		// 	})
		// )
	}

	componentDidMount(){
		// console.log(window.location.href);
		let q = window.location.href.split("viewPlaylist/");
		q = q[1].split("/");
		// console.log(q);
		const email = q[0];
		const id = q[1];

		axios.get(`/items/${email}/${id}`)
			.then(result => {
				const data = result.data;
				console.log(data);
				if(data.message === "error"){
					alert("try again later");
					return;
				}
				this.setState(() => ({
					options : data,
					title : email
				}))
			})
			.catch(error => {
				alert("some error has occured please try again later");
			})
	}

	// componentDidMount(){
	// 	// alert("working");
	// 	try{
	// 		const json = localStorage.getItem('options');
	// 		const options = JSON.parse(json);
	// 		if(options){
	// 			this.setState(()=>({
	// 				// options : options
	// 				options
	// 			}))
	// 		}
	// 	}
	// 	catch(e){
	// 		//we dont want to do anything when we are getting some errors
	// 	}
	// }

	//the first argument is the previous props and the second argument is the previous state
	// componentDidUpdate(prevProps , prevState){
	// 	//chechking whether something is actually changed or not
	// 	if(prevState.options.length !== this.state.options.length){
	// 		//saving it to localStorage by defining
	// 		//key value pairs
	// 		const json = JSON.stringify(this.state.options);
	// 		localStorage.setItem('options' , json);
	// 	}
	// }

	//this function gets calls just "before" the component is removed from the screen or DOM
	componentWillUnmount(){}

	render(){

		// const title = "Title";
		// const subTitle = "Sub Title";

		return(
			<div>
				<Header 
					title={this.state.title} 
					subTitle={this.state.subTitle} />

				<div className="container">

					<Action 
						hasOptions={this.state.options.length > 0} 
						chooseIt={this.chooseTask} />
					
					<div className="widget">
						<Options 
							options={this.state.options} 
							deleteFunction={this.deleteHandleFunction} 
							deleteSingle={this.handleDeleteSingle} />

						<AddOptions 
							handleAdd={this.handleAddOption} />
							
					</div>

					
				</div>
				<OptionModal 
					selectedOption={this.state.selectedOption}
					clearSelectedOption={this.clearSelectedOption}/>
			</div>
		)
	}
}

	// we can also use default props for the main component itself
InDecisionApp.defaultProps = {
	options : []
}

//here down below we can also pass the new props which will automatically override the default props

// ReactDOM.render(<InDecisionApp options={["one" , "two" , "three"]} /> , document.getElementById("app"));

export default InDecisionApp;
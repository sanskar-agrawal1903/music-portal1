import React from 'react';

class AddOptions extends React.Component{

	state = {
		error : undefined
	}

	handleAddOption = (e) => {

		//by converting it into a arror function it now now automatically binds to the this value that is the instance of the class

		e.preventDefault();
		const option = e.target.elements.option.value.trim();

		console.log(option);
		
		const error = this.props.handleAdd(option);
		this.setState(()=>({
			//error : error can also be written as
			error
		}))

		if(!error){
			e.target.elements.option.value = "";
		}

	}
	render(){
		return(
			<div>
				{this.state.error && <p className="add-option-error">{this.state.error}</p>}
				<form className="add-option" onSubmit={this.handleAddOption}>
					<input className="add-option__input" type="text" name="option"></input>
					<button className="button">AddOption</button>
				</form>
			</div>
		);
	}
}

export default AddOptions;
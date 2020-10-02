import React from "react";

import Option from "./Option";

const Options = (props) => {
	return(
		<div>
			{/*here we are just passing the reference of the function that we want to call and by doing this we are breaking down the link between the "this" and the function and to connect them again we have to make use of bind keyword*/}
			<div className="widget-header">
				<h3 className="widget-header__title">Your Options</h3>
				<button
					className="button button--link" 
					onClick={props.deleteFunction}
				>
					Remove all
				</button>
			</div>
			
			{props.options.length === 0 && <p className="widget__message">Please add atleast one option to the list</p>}

			{
				//when we are working with map 
				//1st argument -> the item and 
				//2nd argument -> its index
				props.options.map((option , index) => (
					<Option 
						key={option} 
						optionText={option}
						count={index + 1}
						deleteSingle={props.deleteSingle}
					/>
				))
			}
		</div>
	);
}

export default Options;
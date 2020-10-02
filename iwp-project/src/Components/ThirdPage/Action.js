import React from "react";

const Action = (props) => {
	return(
		<div>
			<button
				className="big-button" 
				disabled={!props.hasOptions} 
				onClick={props.chooseIt}
			>
				What should I do now?
			</button>
		</div>
	);
}

export default Action;
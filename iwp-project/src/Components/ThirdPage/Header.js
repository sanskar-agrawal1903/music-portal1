import React from "react";

const Header = (props) => {
	return(
		<div className="header">
			<div className="container">
				<h1 className="header__title">{props.title}</h1>
				<h2 className="header__subtitle">{props.subTitle}</h2>
			</div>
		</div>
	);
}

//we can also provide some of the default props after every component
Header.defaultProps = {
//this is the place where we will specify all of our default props
	title : "Undefined"
}

export default Header;
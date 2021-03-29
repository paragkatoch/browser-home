import React from "react";
// import "./Features.css";
import { daytime } from "./Functions.js";

class Features extends React.Component {
	render() {
		return (
			<div className="wish">
				<h1>
					Good <span> {daytime()} !</span>
				</h1>
			</div>
		);
	}
}

export default Features;

import React from "react";
import { random, seconds } from "./Functions.js";
import { retarray } from "./Data.js";
import Features from "./Features.js";

let clicked = false;
let prev = 0;
let img = retarray();

class Background extends React.Component {
	state = {
		images: img,
		imgpath: img[random(img.length)].default,
	};

	componentDidMount() {
		this.timers();
	}

	// State functions

	// Function to change state-imgpath
	changeBg = () => {
		let i = random(this.state.images.length);
		if (i !== prev) {
			if (!clicked) {
				clicked = true;
				prev = i;
				this.setState((prevstate) => {
					return {
						imgpath: prevstate.images[i].default,
					};
				});
			}
		} else this.changeBg();
	};

	// Function to change state-images
	refresh = () => {
		let img = retarray();
		let i = random(img.length);
		this.setState((prevstate) => {
			return {
				images: img,
				imgpath: img[i].default,
				prev: i,
			};
		});
		this.changeBg();
	};

	//  Normal functions

	timers() {
		//Changebg every 10 sec
		setInterval(() => {
			this.changeBg(random(this.state.images.length));
			clicked = false;
		}, 1 * 15 * 1000);

		//refresh images every hr
		setTimeout(() => {
			this.refresh();
			setInterval(() => {
				this.refresh();
			}, 60 * 60 * 1000);
		}, ((60 - seconds().getMinutes()) * 60 - seconds().getSeconds()) * 1000);
	}

	timeout(time) {
		setTimeout(() => {
			clicked = false;
		}, time);
	}

	render() {
		console.log("rendered");
		const divStyle = {
			backgroundImage: "url(" + this.state.imgpath + ")",
		};

		return (
			<div
				className="background"
				onDoubleClick={() => {
					this.changeBg();
					this.timeout(2000);
				}}
				style={divStyle}
			>
				<Features />
			</div>
		);
	}
}

export default Background;

// npm install --save scrollreveal
//in App.js
//import Scroll from "./ScrollReveal";  // <Scroll/>

import React from "react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Scroll = () => {
	useEffect(() => {
		ScrollReveal().reveal(".s-reveal", {
			origin: "bottom", //right // left // top
			distance: "50px",
			interval: 500,
			//--------------------------
			// origin: "bottom",
			// distance: "40px",
			// duration: "1200",
			// // reset : true,
			// interval: 200,
			// scale: 0.9,
			// viewFactor: 0.1,
			//-------------------------
			// origin: "bottom",
			// duration: 1000,
			// delay: 375,
			// reset: true,
			// distance: "500px",
			// scale: 1,
			// easing: "ease",
			//--------------------------
		});
	}, []);
	return (
		<div>
			<h1 className="s-reveal">Hello React</h1>
			<p className="s-reveal">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius natus
				dolores ab distinctio similique ex, excepturi blanditiis, aliquid
				harum totam maiores, dolor quia accusamus. Inventore nostrum quos ut
				aliquam error.Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Eius natus dolores ab distinctio similique ex, excepturi
				blanditiis, aliquid harum totam maiores, dolor quia accusamus.
				Inventore nostrum quos ut aliquam error.
			</p>
			<h1 className="s-reveal">Hello React</h1>
			<p className="s-reveal">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius natus
				dolores ab distinctio similique ex, excepturi blanditiis, aliquid
				harum totam maiores, dolor quia accusamus. Inventore nostrum quos ut
				aliquam error.Lorem ipsum dolor sit amet, consectetur adipisicing
				elit. Eius natus dolores ab distinctio similique ex, excepturi
				blanditiis, aliquid harum totam maiores, dolor quia accusamus.
				Inventore nostrum quos ut aliquam error.
			</p>
		</div>
	);
};
export default Scroll;

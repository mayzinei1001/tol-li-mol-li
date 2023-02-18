//using sass ( Css code twy amyar g yay sayar ma lo ag lote htr tae technology)
// npm i -g sass  > sass --version (version pyan sis)

//create 'cus' folder >> css folder and scss folder > cus.css and cus.scss file twy create > cus.scss file mr yayy

// sass src/cus/scss/cus.scss(combine lote) src/cus/css/cus.css(output htote)

// sass src/cus/scss/cus.scss src/cus/css/cus.css

// sass src/cus/scss/cus.scss src/cus/css/cus.css --watch  (kana kana ma yay ya , auto output htote pay)

import React from "react";
import "./cus/css/cus.css";
class Sass extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Hello React</h1>
				<p>
					You are my sunshine my only sunshine. You make me happy when
					skies are grey. You never know dear how much i love u. Please
					don't take my sunshine away.
				</p>
				<button className="btn">Click Me</button>
			</div>
		);
	}
}

export default Sass;

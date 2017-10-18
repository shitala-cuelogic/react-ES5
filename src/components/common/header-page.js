"use strict";

var React = require("react");
var CreateClass = require('create-react-class');

var Header = CreateClass({
	render: function() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<a href="/" className="navbar-brand">
						<img style={{width: "30px"}} src="images/reactjs-logo.png" />
					</a>
					<ul className="nav navbar-nav">
						<li>
							<a href="/" >Home</a>
						</li>
						<li>
							<a href="/#about" >About</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
});

module.exports = Header;
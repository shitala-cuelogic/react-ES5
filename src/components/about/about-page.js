"use strict";

var React = require('react');
var CreateClass = require('create-react-class');

var About = CreateClass({
    render: function() {
        return (
			<div>
				<h1>About</h1>
				<div>
					This application uses the following technologies:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
						<li>Browserify</li>
						<li>Bootstrap</li>
					</ul>
				</div>
			</div>
		); 
    }
});

module.exports = About;
"use strict";

var React = require('react');
var CreateClass = require('create-react-class');

var Home = CreateClass({
    render: function() {
        return (
        	<div className="jumbotron">
        		<h1>Todo App</h1>
        		<p>React, React Router, and Flux for ultra-responsive web apps.</p> 
        	</div>
        );
    }
});

module.exports = Home;
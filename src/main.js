$ = jQuery = require('jquery');

var React = require('react');
var ReactDOM = require('react-dom');
var CreateClass = require('create-react-class');

var Home = require('./components/home-page');
var About = require('./components/about/about-page');
var Header = require('./components/common/header-page');

(function(win) {
	var App = CreateClass({
		render: function() {
			var Child;

			switch(this.props.route) {
				case 'about': 
					Child = About;
					break;
				default: 
					Child = Home;	
			}

			return (
				<div>
					<Header />
					<Child/>
				</div>
			);
		}
	});

	function render() {
		var route = win.location.hash.substr(1);
		ReactDOM.render(<App route={route }/>, document.getElementById('app'));
	}

	win.addEventListener('hashchange', render);
	render();
})(window);
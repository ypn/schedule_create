var React = require('react');

var TopNavBar = React.createClass({
	render:function(){		
		return (
			<li><a href="#"  data-toggle="pill" >{this.props.name}</a></li>
		);
	}
});

module.exports = TopNavBar;
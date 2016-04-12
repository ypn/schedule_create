var React = require('react');

var TopNavBar = React.createClass({
	getInitialState:function(){
		return {			
			href:'#schedule_'+this.props.index		
		};
	},
	render:function(){		
		return (
			<li><a href={this.state.href}  data-toggle="pill" >{this.props.name}</a></li>
		);
	}
});

module.exports = TopNavBar;
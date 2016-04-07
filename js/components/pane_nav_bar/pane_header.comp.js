var React = require('react');

var PaneHeader = React.createClass({
	render:function(){
		var rows = ["	Time","Slots available","Slots remaining","Reservation","Primetime","Maximum party size","% Discount","Status"];
		var titles = [];
		for(key in rows){
			titles.push(<th key={key}>{rows[key]}</th>)
		}
		return (	
			<thead>
				<tr>{titles}</tr>
			</thead>
		);
	}
});

module.exports = PaneHeader;
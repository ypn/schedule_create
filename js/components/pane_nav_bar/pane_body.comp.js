var React 		= require('react');
var Row 		= require('./row.comp');

var PaneBody 	= React.createClass({
	render:function(){
		if(Object.keys(this.props.allSchedule).length <1){			
			return(<tbody/>);			
		}
		
		var allSchedule = this.props.allSchedule;			

		var schedules =[];

		for(var key in allSchedule){			
			if(this.props.tabid==allSchedule[key].tabid){
				schedules.push(<Row key={key} schedule={allSchedule[key]}/>);
			}
			
		}

		return(
			<tbody>			
				{schedules}
			</tbody>
		);
	}
});


module.exports = PaneBody;
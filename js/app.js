var React 		= require('react');
var TopNavBar 	= require('./components/top_nav_bar.comp');
var PaneNavBar 	= require('./components/pane_nav_bar.comp');

var  MainSection = React.createClass({	
	render:function(){
		var listItems = ["Monday","Tuesday","Wenesday",'Thursday','Friday','Saturday','Sunday'];
		var items =[]
		for(var key in listItems){
			items.push(<TopNavBar key={key} name={listItems[key]}/>)
		}

		return (
			<div>
				<div className="nav-title"><ul className="nav nav-pills horizontal-style">{items}</ul></div>	
				<PaneNavBar />		
			</div>
		);
	}
});

React.render(<MainSection/>,document.getElementById('schedules-table'));

var React 		= require('react');
var TopNavBar 	= require('./components/top_nav_bar.comp');
var PaneNavBar 	= require('./components/pane_nav_bar.comp');

var  MainSection = React.createClass({	
	render:function(){
		var listItems = ["Monday","Tuesday","Wenesday",'Thursday','Friday','Saturday','Sunday'];
		var items =[],panes=[];
		for(var key in listItems){		
			items.push(<TopNavBar key={key} name={listItems[key]} index={key}/>)
			panes.push(<PaneNavBar key={key} index={key}/>);
		}
		return (
			<div>
				<div className="nav-title"><ul className="nav nav-pills horizontal-style">{items}</ul></div>			
				<div className="tab-content">{panes}</div>
			</div>
		);
	}
});

React.render(<MainSection/>,document.getElementById('schedules-table'));

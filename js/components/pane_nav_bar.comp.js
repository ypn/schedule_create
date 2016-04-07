var React 	= require('react');
var PaneHeader 	= require('./pane_nav_bar/pane_header.comp');
var PaneBody 	= require('./pane_nav_bar/pane_body.comp');
var PaneFooter 	= require('./pane_nav_bar/pane_footer.comp.js');
var Store 		= require('../stores/stores');

function getSchedules(){
	return {
		schedule:Store.getAll()
	}
}

var PaneNavBar = React.createClass({
	getInitialState:function(){
		return getSchedules();
	},

	componentDidMount: function() {  		
	    Store.addChangeListener(this._onChange);
	},

	render:function(){		
		return(
			<div className="table-responsive">
				<table className="table table-hover">
					<PaneHeader/>
					<PaneBody 
						allSchedule = {this.state.schedule}
					/>
					<PaneFooter/>
				</table>
			</div>
		);
	},

	_onChange:function(){
		this.setState(getSchedules());
	}
});

module.exports = PaneNavBar;
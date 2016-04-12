var React 	= require('react');
var PaneHeader 	= require('./pane_nav_bar/pane_header.comp');
var PaneBody 	= require('./pane_nav_bar/pane_body.comp');
var PaneFooter 	= require('./pane_nav_bar/pane_footer.comp.js');
var Store 		= require('../stores/stores');
var classNames = require('classnames');


var PaneNavBar = React.createClass({
	getInitialState:function(){
		return {
			schedule:Store.getAll(),
			active:(this.props.index!=0)?false:true,	
			id:'schedule_'+this.props.index	
		};
	},
	componentDidMount: function() {  
	    Store.addChangeListener(this._onChange);	   	
	},

	render:function(){		
		return(
			<div 
				className={classNames('tab-pane','fade',{in:this.state.active},{active:this.state.active})} 
				id={this.state.id}
				>
				<div className="table-responsive">
					<table className="table table-hover">
						<PaneHeader/>
						<PaneBody 
							allSchedule = {this.state.schedule} tabid={this.state.id}
						/>
						<PaneFooter tabid={this.state.id}/>
					</table>
				</div>
			</div>
		);
	},

	_onChange:function(){
		this.setState({schedule:Store.getAll()});
	}
});

module.exports = PaneNavBar;
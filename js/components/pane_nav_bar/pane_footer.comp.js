var React = require('react');
var Action = require('../../actions/actions');

var PaneFooter = React.createClass({
	render:function(){		
		return(
			<tfoot>
				<tr>
					<td colSpan ="9">
						<button onClick={this.create} className="btn btn-default"><i className="glyphicon glyphicon-plus-sign"></i> Add more</button>
					</td>
				</tr>
			</tfoot>
		);
	},
	create:function(){	
		Action.create();	
	}
});

module.exports = PaneFooter;
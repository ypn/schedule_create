var React = require('react');
var Action = require('../../actions/actions');

var Row = React.createClass({
	componentDidMount: function() {   		
   		jQuery( ".spinner" ).spinner();
  	},

	render:function(){			
		return(
			<tr>
				<td><input type="text"/></td>
				<td><input className="spinner"/></td>
				<td><input className="spinner"/></td>
				<td><label>5</label></td>
				<td><input type="checkbox"></input></td>
				<td>
					<select>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
				</td>
				<td><input type="text"/></td>
				<td><input type="checkbox"/></td>	
				<td><button className="btn btn-default" onClick={this._destroy}><span className="glyphicon glyphicon-remove-sign" aria-hidden="true"></span></button></td>			
			</tr>
		);		
	},

	_destroy:function(){		
		Action.destroy(this.props.schedule.id);
	}
});

module.exports = Row;
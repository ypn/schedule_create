var Dispatcher 	= require('../dispatcher/dispatcher');
var Constant 	= require('../constants/constants');

var AppAction ={
	create:function(){
		Dispatcher.dispatch({
			actionType:Constant.SCHEDULE_CREATE
		});
	},

	destroy:function(id){
		Dispatcher.dispatch({
			actionType:Constant.SCHEDULE_DESTROY,
			id:id
		});
	}
}

module.exports = AppAction;
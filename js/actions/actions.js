var Dispatcher 	= require('../dispatcher/dispatcher');
var Constant 	= require('../constants/constants');

var AppAction ={
	create:function(tabid){	
		Dispatcher.dispatch({
			actionType:Constant.SCHEDULE_CREATE,
			tabid:tabid
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
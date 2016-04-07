var Dispatcher = require ('../dispatcher/dispatcher');
var EventEmitter = require ('events').EventEmitter;
var Constant = require('../constants/constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _schedule ={};

function create(){
	var _id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
	var data = ['10:00AM',5,5,5,true,4,"30%","Avaiable"];
	_schedule[_id] ={
		id:_id,
		data:data
	}
}

function destroy(_id){	
	delete _schedule[_id];
}
var Store = assign({}, EventEmitter.prototype, {


  getAll: function() {    
    return _schedule;
  },

  emitChange: function() {  
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);  
  },

});

//Register callback to handle all updates
Dispatcher.register(function(action){	
	switch (action.actionType) {
		case Constant.SCHEDULE_CREATE:
			create();
			Store.emitChange();
			break;
		case Constant.SCHEDULE_DESTROY:
			destroy(action.id);
			Store.emitChange();
			break;
		default:
			// statements_def
			break;
	}
});

module.exports = Store;
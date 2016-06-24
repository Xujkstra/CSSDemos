'use strict'

var HashMap = function(){
	this.keyqueue = []
	this.length = 0
	this.set = function(key,value){//设置key value pair
		if(this.keyqueue.indexOf(key) === -1){//确保key 唯一
			this.keyqueue.push(key)
			this.length++;
		}
		this[key] = value
		return this;
	}
	this.remove = function(key){ //删除指定key
		if(this.keyqueue.indexOf(key) === -1){
			return
		}
		delete this[key];
		this.keyqueue.splice(this.keyqueue.indexOf(key),1);
		this.length --;
		return this;
	}
	this.get = function(key){ //获取key的value
		return this[key]
	}
}

var map = new HashMap()
map.set('hello','world').set('dry','wet').set('color','green');
console.log(map.keyqueue)
map.remove('hello').set('drink','water');
console.log(map.keyqueue)
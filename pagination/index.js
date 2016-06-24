var pagenation = {
	container: document.getElementById('page'),
	totalNumber:  100,
	columnNumber: 9,
	current : 1,
	pageIndex: 1,
	init: function(){ // init the pagination
		this.render()
	},
	handleClick: function(){ // add event listener to all pagination buttons.
		var oLi = this.container.getElementsByTagName('li');
		var _this = this;
		for(var i=0,l=oLi.length;i<l;i++){
			oLi[i].addEventListener('click',function(){
				if(this.classList.contains('page-number')){
					_this.current = this.innerHTML
					_this.setCurrent();
				}else if(this.classList.contains('pageup')){
					if(_this.pageIndex<Math.ceil(_this.totalNumber/_this.columnNumber)){
						_this.pageIndex++;
						_this.render()
					}
				}else if(this.classList.contains('pagedown')){
					if(_this.pageIndex>1){
						_this.pageIndex--;
						_this.render()
					}
				}else if(this.classList.contains('prev')){
					if(_this.current+(_this.pageIndex-1)*_this.columnNumber>1){
						if(_this.getIndex()>1){
							_this.current--;
							_this.setCurrent();
						}else {
							_this.pageIndex --;
							_this.current = _this.columnNumber;
							_this.render();
						}
					}
				}else if(this.classList.contains('next')){
					if(_this.current+(_this.pageIndex-1)*_this.columnNumber<_this.totalNumber){
						if(_this.getIndex()<_this.columnNumber){
							_this.current++;
							_this.setCurrent();
						}else {
							_this.pageIndex++;
							_this.current = 1;
							_this.render();
						}
					}
				}
			})
		}
	},
	setCurrent: function(){ //set the pagination buttons style.
		var index = (this.current % this.columnNumber)? this.current % this.columnNumber:this.columnNumber;
		var oPage = this.container.querySelectorAll('.page-number');
		oPage.forEach(function(item,index){
			item.classList.remove('current')
		})
		if(oPage[index-1]){
			oPage[index-1].classList.add('current')
		}else {
			oPage[0].classList.add('current')
			this.current = 1;
		}
		if(this.pageIndex == 1){
			this.container.querySelector('.pagedown').classList.add('disable')
			if(this.current == 1){
				this.container.querySelector('.prev').classList.add('disable')
			}else {
				this.container.querySelector('.prev').classList.remove('disable')
			}
		}else if(this.pageIndex == Math.ceil(this.totalNumber/this.columnNumber )){
			this.container.querySelector('.pageup').classList.add('disable')
			var largest = this.totalNumber % this.columnNumber? this.totalNumber % this.columnNumber: this.columnNumber;
			if(this.current == largest){
				this.container.querySelector('.next').classList.add('disable')
			}else {
				this.container.querySelector('.next').classList.remove('disable')
			}
		}else {
			this.container.querySelector('.pagedown').classList.remove('disable')
			this.container.querySelector('.pageup').classList.remove('disable')
		}
	},
	getIndex: function(){ //get the current page index 
		return this.current%this.columnNumber? this.current%this.columnNumber:this.columnNumber;
	},
	render: function(){// render the pagination
		var str = ''
		var prev = '<li class=\'prev\'>&lt;</li>'
		var pagedown ='<li class=\'pagedown\'>&lt;&lt;</li>'
		var next = '<li class=\'next\'>&gt;</li>'
		var pageup = '<li  class=\'pageup\'>&gt;&gt;</li>' //buttons
		for(var i=0;i<this.columnNumber;i++){
			var number = i+(this.pageIndex-1)*this.columnNumber+1;
			if(number<=this.totalNumber){
				str += '<li class=\'page-number\'>'+number+'</li>'
			}
		}
		str='<ul>'+pagedown+prev+str+next+pageup+'</ul>'
		this.container.innerHTML = str;
		this.handleClick();
		this.setCurrent()
	},
	set: function(obj){ // set the parameters of this pagination.
		console.log(obj)
		this.totalNumber = obj.total || 99
		this.columnNumber = obj.column || 9
		this.container = obj.container || document.getElementById('page') //judge
		console.log(this.container)
		return this;
	}
}

pagenation.set({total:10,column:1,container:wrap}).init();
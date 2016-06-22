var url = [];
var title = [];
var arr = [];
$.get('http://www.znu.com/collection/productlistdata?sort=NewesttoOldest&&color=all&&size=all?sort=NewesttoOldest&&color=all&&size=all',function(data){
	data.data.forEach(function(item,index){
		url.push(item.image_productpage[0]);
		title.push(item.data.name);
		arr.push({
			url: item.image_productpage[0],
			title: item.data.name
		})
	})
	arr.forEach(function(item,index){
		var figure = $("<figure></figure>")
		var img = $("<img />").attr('src',item.url);
		var figcaption = $("<figcaption></figcaption>").html(item.title)
		figure.append(img,figcaption);
		var index = getColumnIndex();
		$(".column-"+index).append(figure);
	})
	// console.log(url,title)
},'json')


var boxWidth = $(".box")[0].offsetWidth;
var figureWidth = 197;
var columnNumber = Math.floor(boxWidth / figureWidth);
console.log(columnNumber)
for(var i =0; i<columnNumber; i++){
	var column = $("<div></div>").addClass('column column-'+i);
	$(".box").append(column);
}

function getColumnIndex(){
	var oColumn = $(".column");
	var result = 0;
	var min = oColumn[0].offsetHeight;
	oColumn.each(function(index){
		// console.log(this.offsetHeight)
		if(this.offsetHeight < min){
			min = this.offsetHeight;
			result = index; 
		}
	})
	// console.log(result)
	return result;
}
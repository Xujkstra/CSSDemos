var oBtn = document.querySelector('#change')

var oProgress = document.querySelector('.progress')

var oLi = document.querySelectorAll('.meter li')

oBtn.addEventListener('click',function(){
    oProgress.style.width = "75%"
})

for(var i = 0; i< oLi.length; i++){
	oLi[i].addEventListener('click',function(){
		var pointer = this.getAttribute('data-point');
		oProgress.style.width = (pointer-1)*25+'%';
	})
}

// var a = {
// 	color: 'blue'
// }

// var b = {
// 	color: 'green'
// }
// a.sayColor = function() {
// 	console.log(this)
// 	console.log(this.color)
// }

// a.sayColor()

// a.sayColor.apply(b);

var obj = {
	"message_content":"http://www.dhl.com/en/express/tracking.html?AWB=5796726283&brand=DHL",
	"user_id":"13046"
}

var string = JSON.stringify(obj);

console.log(typeof string)

var arr = []
for (var i = 0; i < 256; i++) {
  var char = String.fromCharCode(i)
  if (encodeURI(char) !== encodeURIComponent(char)) {
    arr.push({
      char: char,
      encodeURI: encodeURI(char),
      encodeURIComponent: encodeURIComponent(char)
    })
  }
}
console.table(arr)
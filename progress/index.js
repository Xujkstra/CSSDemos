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


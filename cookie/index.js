let oLogin = document.querySelector('.login')
let form = document.querySelector('.form')
oLogin.addEventListener('click', function() {
  let formdata = new FormData(form)
  console.log(formdata.getAll('password'))
  console.log(formdata.getAll('username'))
},false)

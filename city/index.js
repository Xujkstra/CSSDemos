let provinceReg = /[1-9][0-9]0{4}/
let provinceArea = document.querySelector('#province')
let cityArea = document.querySelector('#city')
let province = []
let _city = []

for(var i = 0; i < city.length; i++) {
  if(provinceReg.test(city[i].code)) {
    province.push(city[i])
  }
}

for(var i = 0; i < province.length; i++) {
  let option = `<option value=${province[i].code}>${province[i].name}</option>`
  provinceArea.insertAdjacentHTML('beforeend',option)
}

provinceArea.addEventListener('change', function() {
  let value = this.value
  console.log(value)
  _city = []
  let cityReg = new RegExp(value.substring(0,2)+'[0-9][1-9]0{2}')
  console.log(cityReg)
  for(var i =0; i < city.length; i++) {
    if(cityReg.test(city[i].code)) {
      _city.push(city[i])
      let option = `<option value=${city[i].code}>${city[i].name}</option>`
      cityArea.insertAdjacentHTML('beforeend',option)
    }
  }
  console.log('citycitycity=====',_city)
})

let oFile = document.querySelector('input[type="file"]')
let img = document.querySelector('img')
let preview = document.querySelector('.preview')

oFile.addEventListener('change', function(e) {
  let file = e.target.files || e.dataTransfer.files
  if(file) {
    let img = document.createElement("img");
    img.classList.add("obj");
    img.file = file;
    preview.appendChild(img);

    var reader = new FileReader();
    reader.onload = (function(aImg) {
      return function(e) {
        aImg.src = e.target.result;
      };
    })(img);
    reader.readAsDataURL(file[0]);
  }
})

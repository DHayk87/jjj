

document.querySelector('.file').onchange = function (evt) {
    let tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    if (FileReader && files && files.length) {
        let fr = new FileReader();
        fr.onload = function () {
            document.getElementById('image').src = fr.result;
        }
        fr.readAsDataURL(files[0]);
    }
}

let photo = document.querySelector('#image')

let blr = document.querySelector('#bl')
let contrast = document.querySelector('#cl')
let grayscale = document.querySelector('#gs')
let hue = document.querySelector('#hu')
let sepia = document.querySelector('#sp')
let brightner = document.querySelector('#bt')

blr.addEventListener('change', ()=>{
    photo.style.filter += `blur(${blr.value + 'px'})`
})
contrast.addEventListener('change', ()=>{
    photo.style.filter += `contrast(${contrast.value + '%'})`
})
grayscale.addEventListener('change', ()=>{
    photo.style.filter += `grayscale(${grayscale.value + '%'})`
})
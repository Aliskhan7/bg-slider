let body = document.body;
let rightBtn = document.getElementById('right');
let leftBtn = document.getElementById('left');
let slides = document.querySelectorAll('.slide')

let activeSlide = 0;

rightBtn.addEventListener('click', () =>{
    activeSlide++
    if(activeSlide > slides.length - 1){
        activeSlide = 0
    }
    setActiveSlide()
    setBg()
})
leftBtn.addEventListener('click', () =>{
    activeSlide--
    if(activeSlide < 0){
        activeSlide = slides.length - 1
    }
    setActiveSlide()
    setBg()
})

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}
setBg()
function setBg(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}


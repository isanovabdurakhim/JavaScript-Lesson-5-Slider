let slidePosition = 0;

const slides = document.getElementsByClassName('carousel__item');
console.log(slides);

const totalSlides = slides.length;

const prev = document.getElementById('carousel__button--prev');
console.log(prev);

const next = document.getElementById('carousel__button--next');
console.log(next);

prev.addEventListener('click', function() {
    moveToPrevSlide();
});

next.addEventListener('click', function() {
    moveToNextSlide();
});

function moveToNextSlide() {
    console.log('Next');
    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition() 
}

function moveToPrevSlide() {
    console.log('Prev');
    if(slidePosition === 0) {
        slidePosition =totalSlides - 1;
    } else {
        slidePosition--;
    }  
    updateSlidePosition() 
}

// function updateSlidePosition() {
//     for(let i =0; i < slides.length; i++) {
//         slides[i].classList.remove('active');
//         slides[i].classList.add('nonActive');
//     }
//     slides[slidePosition].classList.add('active');
// }

function updateSlidePosition() {
    for(let slide of slides) {
        slide.classList.remove('active');
        slide.classList.add('nonActive');
    }
    slides[slidePosition].classList.add('active');
}







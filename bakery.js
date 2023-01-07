//for main div slider   ------------

const slides= document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
    (slide,index)=>{
        slide.style.left = `${index * 100}%`
    }

)

const goPrev = () => {
    counter--
    if(counter < 0){
        counter=3
    }  
    slideImage()
} 

const goNext = () => {
    counter++
    if(counter > 3){
        counter=0
    }
    slideImage()
}

const slideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}


var playSlider;
var repeater = () =>{
    playSlider = setInterval(function (){
        slides.forEach((slide,index)=>{
            slide.style.transform = `translateX(-${counter * 100}%)`
        });
        counter++;
        if(counter > 3){
                counter = 0;
            }
        }, 3000);
};
repeater();

// function stopShow(){
//     clearInterval(playSlider);
// }
// function runShow(){
//     function();
// }
// window.onload=runShow



//for stiky navbar------------

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* for wlcome slider --------------*/


var swiper = new Swiper(".cart_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    speed:600,
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
  });



// for bakery div slider-------------- 



var swiper = new Swiper(".cart_slider2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    centeredSlides: true,
    speed:600,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
  });

// for rating food slider_1-----------         and      rating food slider_2---------------


var swiper = new Swiper(".cart_slider3", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop:true,
    centeredSlides: true,
    speed:600,
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
  });

// for ratings fror customer--------------------


var swiper = new Swiper(".cart_slider4", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop:true,
    centeredSlides: true,
    speed:600,
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
  });
  
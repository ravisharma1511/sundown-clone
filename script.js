const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



var elemc = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image")

elemc.addEventListener("mouseenter" ,function(){
  fixed.style.display = "block";
})

elemc.addEventListener("mouseleave" ,function(){
    fixed.style.display = "none";
  })

  var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
     e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
     })
});

function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
  });
}


function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}

swiperAnimation();
loaderAnimation();
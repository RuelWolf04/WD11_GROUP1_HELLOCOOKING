


// ----------------Nav shrink

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', bodyScroll)
})

function bodyScroll(e){
  (window.scrollY > 60) ? document.body.classList.add('bodyScroll') : document.body.classList.remove('bodyScroll')
}



// ----------------Navbar Menu Toggle

const openMenuBtn = document.querySelector(".js-nav-menu-open");
const mainMenu = document.querySelector(".js-nav-menu");

openMenuBtn.addEventListener("click", () => {
  let btnAttribute = JSON.parse(openMenuBtn.getAttribute("aria-expanded"))
  // alert(btnAttribute)
  
  openMenuBtn.setAttribute("aria-expanded", !btnAttribute)
})


// ----------------hero carousel

const carouselBtns = document.querySelectorAll("[data-carousel-btn]")

carouselBtns.forEach(cBtn => {
  cBtn.addEventListener('click', () => {
    let offset = cBtn.dataset.carouselBtn === 'next' ? 1 : -1 //using ternary operator
    // alert(cBtn.dataset.carouselBtn)
  const heroCarouselSlides = document.querySelector("[data-carousel-slides]")
  const activeHeroSlide = heroCarouselSlides.querySelector("[data-active]")
  let slideNewIndex = [...heroCarouselSlides.children].indexOf(activeHeroSlide) + offset

  
  if(slideNewIndex < 0) slideNewIndex = heroCarouselSlides.children.length - 1
  
  if(slideNewIndex > heroCarouselSlides.children.length - 1)slideNewIndex = 0
  
  heroCarouselSlides.children[slideNewIndex].dataset.active = true
  delete activeHeroSlide.dataset.active
  })

});










// VALIDATION 

        (function () {
          "use strict";
          var forms = document.querySelectorAll(".needs-validation");

          Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (!form.checkValidity()) {
                  event.preventDefault();
                  event.stopPropagation();
                }

                form.classList.add("was-validated");
              },
              false
            );
          });
        })();



// from recipes  to specific product 
        function viewproduct(id) {
          

          localStorage.setItem('id', id)

          window.location.href = 'afritada.html'
        }


// button color scheme



        
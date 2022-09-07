


// ----------------Navbar Menu Toggle

const openMenuBtn = document.querySelector(".js-nav-menu-open");
const mainMenu = document.querySelector(".js-nav-menu");

openMenuBtn.addEventListener("click", () => {
  let btnAttribute = JSON.parse(openMenuBtn.getAttribute("aria-expanded"))
  // alert(btnAttribute)
  
  openMenuBtn.setAttribute("aria-expanded", !btnAttribute)
})




// ----------------Carousel
const carouselBtns = document.querySelectorAll("[data-carousel-button]"); 

carouselBtns.forEach(carouselBtn => {
  carouselBtn.addEventListener('click', () => {
    const offset = carouselBtn.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = carouselBtn.closest('[data-carousel]').querySelector('[data-slides]')

    const activeSlide =  slides.querySelector('[data-active]')
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if(newIndex <= 0) newIndex = slides.children.length - 1
    if(newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})







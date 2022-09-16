
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







// ----------------faqs

const faq = document.querySelectorAll('.faq')

faq.forEach((item, index) => {
  let header = item.querySelector("header")
  header.addEventListener("click", () => {
    item.classList.toggle("open")

    let faqAnswer = item.querySelector(".answer");
    if(item.classList.contains("open")){
      faqAnswer.style.height = `${faqAnswer.scrollHeight}px`
    } else {
    faqAnswer.style.height = '0px'
    }
    closeFaq(index)
  })
})

function closeFaq(index){
  faq.forEach((otherItem, otherIndex) => {
    if(otherIndex != index){
      otherItem.classList.remove('open')
      let otherAnswer = otherItem.querySelector(".answer")
      otherAnswer.style.height = '0px';
    }
  
})
};
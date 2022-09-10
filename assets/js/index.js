


// ----------------Navbar Menu Toggle

const openMenuBtn = document.querySelector(".js-nav-menu-open");
const mainMenu = document.querySelector(".js-nav-menu");

openMenuBtn.addEventListener("click", () => {
  let btnAttribute = JSON.parse(openMenuBtn.getAttribute("aria-expanded"))
  // alert(btnAttribute)
  
  openMenuBtn.setAttribute("aria-expanded", !btnAttribute)
})




// ----------------Hero Carousel
const heroSlide = document.querySelector(".hero-carousel-slides") 
const heroNextBtn = document.querySelector("#hc-next-btn")
const heroPrevBtn = document.querySelector("#hc-prev-btn")

let heroSlides = document.querySelectorAll(".hc-slides-slide")
let index = 1
let interval = 5000

const firstCopy = heroSlides[0].cloneNode(true)
const lastCopy = heroSlides[heroSlides.length - 1].cloneNode(true)

firstCopy.id = 'first-copy'
lastCopy.id = 'last-copy'

heroSlide.append(firstCopy)
heroSlide.prepend(lastCopy)


const slideWidth = heroSlides[index].clientWidth
heroSlide.style.transform = `translateX(${-slideWidth * index}px)`

const startHeroSlide = () => {
  heroIntervalId = setInterval(() => {
    nextSlide()
  }, interval)
}

heroSlide.addEventListener('transitionend', () => {
  heroSlides = document.querySelectorAll(".hc-slides-slide")
  if(heroSlides[index].id === firstCopy.id){
    index = 1
  heroSlide.style.transition = `none`
  heroSlide.style.transform = `translateX(${-slideWidth * index}px)`
  }


  if(heroSlides[index].id === lastCopy.id){
    index = heroSlides.length - 2;
    heroSlide.style.transition = `none`
    heroSlide.style.transform = `translateX(${-slideWidth * index}px)`
    }
})

heroSlide.addEventListener('mouseenter', () => {
  clearInterval(heroIntervalId)
})
heroSlide.addEventListener('mouseleave', startHeroSlide)

const nextSlide = () => {
  if(index >= heroSlides.length - 1) return
  index++
  heroSlide.style.transform = `translateX(${-slideWidth * index}px)`
  heroSlide.style.transition = `.7s ease-out`
}

const prevSlide = () => {
  if(index <= 0) return
  index--
  heroSlide.style.transform = `translateX(${-slideWidth * index}px)`
  heroSlide.style.transition = `.7s ease-out`
}



heroNextBtn.addEventListener("click", nextSlide)
heroPrevBtn.addEventListener("click", prevSlide)

startHeroSlide()







//  faqs

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
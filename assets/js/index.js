
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

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (function () {
          "use strict";

          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.querySelectorAll(".needs-validation");

          // Loop over them and prevent submission
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




// cards

const dishCards = document.getElementById('dish-cards')

const dishCardItem = [{
  id: 'Lite Adobo',
  name: 'Lite Adobo',
  hash: 'Tangy Chicken in Garlic Sauce',
  img: 'assets/imgs/productImgs/Healthy-Adobo-Recipe-HN857-iStock629557450-Sized 1.jpg',
  cookingTime: '30min',
  calorie: "134.5",
  prepTime: '10min',
  fat: '3.3g',
  cholesterol: '25.8',
  sodium: '580.7mg',
  carbs: '8.4g',
  dietaryFiber: '0.8g',
  descrip: 'loremfajoruorajfopafaofoapfaoh fo afasja'
},
{
  id: 'Traditional Chicken Afritada',
  name: 'Traditional Chicken Afritada',
  hash: 'with Organic Tomato Sauce',
  img: 'assets/imgs/productImgs/afritada 1.jpg',
  cookingTime: '15m',
  calorie: "504.7"
}
]

const newDishCard = () => {
  return (dishCards.innerHTML =  dishCardItem.map((a) =>  {
    let { id, name, hash, img, cookingTime, calorie} = a
  return `
    <div class="col">
                <div class="card h-100" id='product-card-${id}'>
                  <div class="card-image-container">
                    <img
                      src="${img}"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${hash}</p>
                    <p class="card-text">${cookingTime} | Calories: ${calorie}</p>
                  </div>
                  <div class="card-overlay">
                    <div class="card-buttons">
                      <button onclick="viewProduct(${id})">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                      <button><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
    `}).join(""))

}
  



newDishCard();

let viewProduct = (a) =>{ 
  alert(a)
}
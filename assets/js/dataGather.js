import { recipes } from './data.js'


const dishCards = document.getElementById('dish-cards');

const newDishCard = () => {
  return dishCards.innerHTML =  recipes.map(a => {
  return `
              <div class="col">
                <div class="card h-100" id=product-card-${a.id}>
                  <div class="card-image-container">
                    <img
                      src="${a.img}"
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">${a.name}</h5>
                    <p class="card-text">${a.hash}</p>
                    <p class="card-text">${a.cookingTime} | Calories: ${a.nutrifacts.calorie}</p>
                  </div>
                  <div class="card-overlay">
                    <div class="card-buttons">
                      <button onclick="viewproduct('${a.id}')">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                      <button onclick="window.location.href='cart.html'"><i class="fa-solid fa-bag-shopping"></i></button>
                    </div>
                  </div>
                </div>
              </div>
    `}).join("")
}

newDishCard();






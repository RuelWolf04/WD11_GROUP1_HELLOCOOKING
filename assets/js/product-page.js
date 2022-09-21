import { recipes } from './data.js'

window.onload = function(){
  const recipeName = document.querySelector('#js-recipe-name')
  const recipePicture = document.querySelector('#js-food-img-container')
  const recipeOverview = document.querySelector('.js-food-overview-content')
  const recipeCategory = document.querySelector('#js-recipe-category')
  const recipePrepTime = document.querySelector('#js-recipe-prep-time')
  const recipeCookingTime = document.querySelector('#js-recipe-cooking-time')
  const recipeCalorie = document.querySelector('#js-calorie')
  const recipeFat = document.querySelector('#js-fat')
  const recipeCholesterol = document.querySelector('#js-cholesterol')
  const recipeSodium = document.querySelector('#js-sodium')
  const recipeCarbs = document.querySelector('#js-carbs')
  const recipeDietaryFiber = document.querySelector('#js-dietary-fiber')
  const recipeProtein = document.querySelector('#js-protein')








  let passedId = localStorage.getItem('id')
  
  let recipeArray = recipes.filter(a => a.id === passedId)
  console.log(recipeArray[0].sodium)

  recipeName.textContent = recipeArray[0].name
  recipePicture.innerHTML = `<img src='${recipeArray[0].img}' alt='${recipeArray[0].name}'>`
  recipeOverview.textContent = recipeArray[0].descrip
  recipeCategory.textContent = recipeArray[0].category
  recipePrepTime.textContent = recipeArray[0].prepTime
  recipeCookingTime.textContent = recipeArray[0].cookingTime
  recipeCalorie.textContent = recipeArray[0].nutrifacts.calorie
  recipeFat.textContent = recipeArray[0].nutrifacts.fat
  recipeCholesterol.textContent = recipeArray[0].nutrifacts.cholesterol
  recipeSodium.textContent = recipeArray[0].nutrifacts.sodium
  recipeCarbs.textContent = recipeArray[0].nutrifacts.carbs
  recipeDietaryFiber.textContent = recipeArray[0].nutrifacts.dietaryFiber
  recipeProtein.textContent = recipeArray[0].nutrifacts.protein







}
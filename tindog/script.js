import dogs from './data.js'
import Dog from './Dog.js'

const mainContent = document.querySelector('.main-content')
const btnContainer = document.querySelector('.choice-btn-container')
const modal = document.querySelector('.modal')
const likeBtn = document.querySelector('.like-btn')
const swipeBtn = document.querySelector('.swipe-btn')
const logoBtn = document.querySelector('.logo-btn')

let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

likeBtn.addEventListener('click', isLiked)
swipeBtn.addEventListener('click', isSwiped)
logoBtn.addEventListener('click', refreshDogs)

renderDog()

function renderDog() {
  mainContent.innerHTML = currentDog.setDogHtml()
}

function getNewDog() {
  currentDogIndex += 1
  currentDog = new Dog(dogs[currentDogIndex])

  if (currentDogIndex < 3) {
    renderDog()
  } else {
    modal.style.display = 'block'
    btnContainer.style.display = 'none'
    mainContent.style.display = 'none'
  }

  swipeBtn.disabled = false
  likeBtn.disabled = false
}

function refreshDogs() {
  modal.style.display = 'none'
  mainContent.style.display = 'block'
  btnContainer.style.display = 'flex'
  currentDogIndex = 0
  currentDog = new Dog(dogs[currentDogIndex])
  renderDog()
}

function isLiked() {
  swipeBtn.disabled = true
  likeBtn.disabled = true
  mainContent.innerHTML += currentDog.setMatchStatus(true)

  setTimeout(() => {
    getNewDog()
  }, 1000)
}

function isSwiped() {
  likeBtn.disabled = true
  swipeBtn.disabled = true
  currentDog.hasBeenSwiped = true
  mainContent.innerHTML += currentDog.setMatchStatus(false)

  setTimeout(() => {
    getNewDog()
  }, 1000)
}

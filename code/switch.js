// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const customerName = prompt(`What is your name?`)

alert(`Hello ${customerName}, welcome!`)

// Step 2 - Food choice

const foodChoice = prompt(
  `What would you like to order?
  Please enter the number of your choice:
  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗
  `
)

let selection = parseInt(foodChoice)
let selectedFood

switch (selection) {
  case 1:
    selectedFood = "Pizza"
    break

  case 2:
    selectedFood = "Pasta"
    break

  case 3:
    selectedFood = "Salad"
    break

  default:
    selectedFood = "Unknown"
    break
}

alert(`You have chosen ${selectedFood}`)

// Step 3 - Subtype choice

// Pizza selection

if (selectedFood === "Pizza") {
  const pizzaChoice = prompt(
    `Which pizza would you like to order? 🍕
      1 - Pizza Margherita
      2 - Pizza Salsiccia
      3 - Pizza Quattro Formaggi`
  )

  let pizzaSelection = parseInt(pizzaChoice)
  let selectedPizza = ""

  switch (pizzaSelection) {
    case 1:
      selectedPizza = "Pizza Margherita"
      break

    case 2:
      selectedPizza = "Pizza Salsiccia"
      break

    case 3:
      selectedPizza = "Pizza Quattro Formaggi"
      break

    default:
      selectedPizza = "Unknown"
      break
  }

  alert(`You have chosen ${selectedPizza} 🍕`)
}

// Pasta selection

if (selectedFood === "Pasta") {
  const pastaChoice = prompt(
    `Which pasta would you like to order? 🍝
        1 - Spaghetti Carbonara
        2 - Pasta Bolognese
        3 - Pasta Pollo`
  )

  let pastaSelection = parseInt(pastaChoice)
  let selectedPasta = ""

  switch (pastaSelection) {
    case 1:
      selectedPasta = "Spaghetti Carbonara"
      break

    case 2:
      selectedPasta = "Pasta Bolognese"
      break

    case 3:
      selectedPasta = "Pasta Pollo"
      break

    default:
      selectedPasta = "Unknown"
      break
  }

  alert(`You have chosen ${selectedPasta} 🍝`)
}

// Salad selection

if (selectedFood === "Salad") {
  const saladChoice = prompt(
    `Which salad would you like to order? 🥗
      1 - Caesar salad
      2 - Greek salad
      3 - Pasta salad`
  )

  let saladSelection = parseInt(saladChoice)
  let selectedSalad = ""

  switch (saladSelection) {
    case 1:
      selectedSalad = "Caesar salad"
      break

    case 2:
      selectedSalad = "Greek Salad"
      break

    case 3:
      selectedSalad = "Pasta Salad"
      break

    default:
      selectedSalad = "Unknown"
      break
  }

  alert(`You have chosen ${selectedSalad} 🥗`)
}

// Step 4 - Age

const priceChild = 10
const priceAdult = 15
const customerAge = parseInt(prompt(
  `Is the meal for a child or an adult? Please type your age:`
))

let confirmOrder

if (customerAge <= 12) {
  confirmOrder =
    prompt(`One child sized ${selectedFood} will be prepared for you. That will be ${priceChild}€. 
Do you want to continue with your order? 
Enter a number to confirm: 
1 - Yes 
2 - No`)
} else {
  confirmOrder =
    prompt(`One adult sized ${selectedFood} will be prepared for you. That will be ${priceAdult}€.
Do you want to continue with your order? 
Enter a number to confirm: 
1 - Yes 
2 - No`)
}

// Step 5 - Order confirmation

let orderConfirm = parseInt(confirmOrder)

switch (orderConfirm) {
  case 1:
    alert(`Your food is now being prepared 👩‍🍳
  Thank you for your order and welcome back! 👋`)
    break

  case 2:
    alert(`Thank you for visiting, have a nice day!👋`)
    break

  default:
    alert(`Unknown choice, please try again!`)
    break
}

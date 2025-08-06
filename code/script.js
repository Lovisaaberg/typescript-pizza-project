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

let selectedFood = ""

if (foodChoice === "1") {
  selectedFood = "Pizza"
} else if (foodChoice === "2") {
  selectedFood = "Pasta"
} else if (foodChoice === "3") {
  selectedFood = "Salad"
} else {
  alert("Invalid choice, please try again.")
  exit(1)
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


  let selectedPizza = ""

  if (pizzaChoice === "1") {
    selectedPizza = "Pizza Margherita"
  } else if (pizzaChoice === "2") {
    selectedPizza = "Pizza Salsiccia"
  } else if (pizzaChoice === "3") {
    selectedPizza = "Pizza Quattro Formaggi"
  } else {
    alert("Invalid choice, please try again.")
    exit(1)
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

  let selectedPasta = ""

  if (pastaChoice === "1") {
    selectedPasta = "Spaghetti Carbonara"
  } else if (pastaChoice === "2") {
    selectedPasta = "Pasta Bolognese"
  } else if (pastaChoice === "3") {
    selectedPasta = "Pasta Pollo"
  } else {
    alert("Invalid choice, please try again.")
    exit(1)
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

  let selectedSalad = ""

  if (saladChoice === "1") {
    selectedSalad = "Caesar salad"
  } else if (saladChoice === "2") {
    selectedSalad = "Greek salad"
  } else if (saladChoice === "3") {
    selectedSalad = "Pasta salad"
  } else {
    alert("Invalid choice, please try again.")
    exit(1)
  }

  alert(`You have chosen ${selectedSalad} 🥗`)
}

// Step 4 - Age

const priceChild = 10
const priceAdult = 15
const customerAge = prompt(
  `Is the meal for a child or an adult? Please type your age:`
)

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

if (confirmOrder === "1") {
    alert(`Your food is now being prepared 👩‍🍳 
  Thank you for your order and welcome back! 👋`)
} else if (confirmOrder === "2") {
    alert(`Thank you for visiting, have a nice day!`)
}



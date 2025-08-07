"use strict";
// Step 1 - Welcome and introduction
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);
const customerName = prompt(`What is your name?`);
if (!customerName) {
    alert("You must enter your name.");
    throw new Error("No name entered");
}
alert(`Hello ${customerName}, welcome!`);
// Step 2 - Food choice
const foodChoice = prompt(`What would you like to order?
  Please enter the number of your choice:
  1 - Pizza 🍕
  2 - Pasta 🍝
  3 - Salad 🥗
  `);
if (!foodChoice) {
    alert("You must choose a food to continue.");
    throw new Error("No food choice given");
}
let selectedFood;
if (foodChoice === "1") {
    selectedFood = "Pizza";
}
else if (foodChoice === "2") {
    selectedFood = "Pasta";
}
else if (foodChoice === "3") {
    selectedFood = "Salad";
}
else {
    alert("Invalid choice, please try again.");
    throw new Error("Invalid food choice");
}
alert(`You have chosen ${selectedFood}`);
let selectedSubType;
if (selectedFood === "Pizza") {
    const pizzaChoice = prompt(`Which pizza would you like to order? 🍕
      1 - Pizza Margherita
      2 - Pizza Salsiccia
      3 - Pizza Quattro Formaggi`);
    if (!pizzaChoice) {
        alert("Please make your choice of pizza");
        throw new Error("No pizza choice was made");
    }
    if (pizzaChoice === "1") {
        selectedSubType = "Pizza Margherita";
    }
    else if (pizzaChoice === "2") {
        selectedSubType = "Pizza Salsiccia";
    }
    else if (pizzaChoice === "3") {
        selectedSubType = "Pizza Quattro Formaggi";
    }
    else {
        alert("Invalid choice, please try again.");
        throw new Error("Invalid Pizza choice");
    }
    // Pasta selection
}
else if (selectedFood === "Pasta") {
    const pastaChoice = prompt(`Which pasta would you like to order? 🍝
        1 - Spaghetti Carbonara
        2 - Pasta Bolognese
        3 - Pasta Pollo`);
    if (!pastaChoice) {
        alert("Please make your choice of pasta");
        throw new Error("No pasta choice was made");
    }
    if (pastaChoice === "1") {
        selectedSubType = "Spaghetti Carbonara";
    }
    else if (pastaChoice === "2") {
        selectedSubType = "Pasta Bolognese";
    }
    else if (pastaChoice === "3") {
        selectedSubType = "Pasta Pollo";
    }
    else {
        alert("Invalid choice, please try again.");
        throw new Error("Invalid pasta choice");
    }
}
// Salad selection
else if (selectedFood === "Salad") {
    const saladChoice = prompt(`Which salad would you like to order? 🥗
      1 - Caesar salad
      2 - Greek salad
      3 - Pasta salad`);
    if (!saladChoice) {
        alert("Please make your choice of salad");
        throw new Error("No salad choice was made");
    }
    if (saladChoice === "1") {
        selectedSubType = "Caesar salad";
    }
    else if (saladChoice === "2") {
        selectedSubType = "Greek salad";
    }
    else if (saladChoice === "3") {
        selectedSubType = "Pasta salad";
    }
    else {
        alert("Invalid choice, please try again.");
        throw new Error("Invalid salad choice");
    }
}
else {
    throw new Error("Invalid food type");
}
if (selectedSubType) {
    alert(`You have chosen ${selectedSubType} 🎉`);
}
else {
    throw new Error("No dish selected");
}
// Step 4 - Age
const priceChild = 10;
const priceAdult = 15;
const customerAgeInput = prompt(`Is the meal for a child or an adult? Please type your age:`);
if (!customerAgeInput) {
    alert("You must enter your age.");
    throw new Error("No age entered");
}
const customerAge = parseInt(customerAgeInput);
if (isNaN(customerAge)) {
    alert("Please enter a valid number for age.");
    throw new Error("Invalid age input");
}
let confirmOrder = null;
if (customerAge <= 12) {
    const confirmInput = prompt(`One child sized ${selectedFood} will be prepared for you. That will be ${priceChild}€. 
Do you want to continue with your order? 
Enter a number to confirm: 
1 - Yes 
2 - No`);
    if (confirmInput === "1" || confirmInput === "2") {
        confirmOrder = confirmInput;
    }
    else {
        alert("Invalid confirmation input.");
        throw new Error("Invalid confirmation");
    }
}
else {
    const confirmInput = prompt(`One adult sized ${selectedFood} will be prepared for you. That will be ${priceAdult}€.
Do you want to continue with your order? 
Enter a number to confirm: 
1 - Yes 
2 - No`);
    if (confirmInput === "1" || confirmInput === "2") {
        confirmOrder = confirmInput;
    }
    else {
        alert("Invalid confirmation input.");
        throw new Error("Invalid confirmation");
    }
}
// Step 5 - Order confirmation
if (confirmOrder === "1") {
    alert(`Your food is now being prepared 👩‍🍳 
  Thank you for your order and welcome back! 👋`);
}
else if (confirmOrder === "2") {
    alert(`Thank you for visiting, have a nice day!`);
    throw new Error("Order not confirmed");
}

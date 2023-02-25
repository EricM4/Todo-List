"use strict";

// DOM Declarations
const addTask = document.querySelector(".addTask");
const input = document.querySelector(".input");
const HideShow = document.querySelector(".hide-show");
const message = document.querySelector(".hide-show-message");
const del = document.querySelector(".del-btn");

let delButtons = [];
// Variable Declarations
let allItems = [];
let items = 0;
let displayed = 1;
let hidden = false;
// Functions
////////////

// Adding to the list

addTask.addEventListener("click", function () {
  let text = input.value;
  input.value = "";
  // Adding to the list
  if (text) {
    HideShow.insertAdjacentHTML(
      "afterend",
      `<div class="list-item "><h6>${text}</h6><button class="del-btns">Delete</button></div>`
    );
    items++;
    allItems = document.querySelectorAll(".list-item");
    delButtons = document.querySelectorAll(".del-btns");
    console.log(delButtons);

    delButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const cur = e.target.parentNode;
        cur.remove();
      });
    });
    if (hidden === true) {
      allItems[0].style.display = "none";
    }
  }
});

// Hiding and Showing the List

HideShow.addEventListener("click", function () {
  console.log(allItems);
  if (displayed) {
    displayed = 0;
    allItems.forEach((item) => (item.style.display = "none"));
    message.textContent = "Show List";
    hidden = true;
  } else {
    displayed = 1;
    allItems.forEach((item) => (item.style.display = "flex"));
    message.textContent = `Hide List`;
    hidden = false;
  }
});

// Deleting all tasks
del.addEventListener("click", function () {
  allItems.forEach((item) => item.remove());
});

// Deleting a single task

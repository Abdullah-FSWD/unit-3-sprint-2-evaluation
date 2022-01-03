let cart_container = document.getElementById("cartContainer");

let items = JSON.parse(localStorage.getItem("Meals")) || [];

if (items.length == 0) {
  alert("No Item in the Cart Please add Items");
}



getItem(items);

function getItem(items) {
  items.forEach(function (el) {
    let dish_div = document.createElement("div");

    let meal = document.createElement("h3");
    meal.innerText = el.strMeal;

    let thumbnail = document.createElement("img");
    thumbnail.src = el.strMealThumb;

    let price = document.createElement("h3");
    el.price = Math.floor(Math.random() * 500) + 100;
    //   price.innerText = `₹ ${Math.floor(Math.random() * 500) + 100}`;

    price.innerText = `₹ ${el.price}`;

    let remove = document.createElement("button");
    remove.innerText = "Remove";

    remove.addEventListener("click", function () {
      dish_div.innerHTML=null;
    });

    dish_div.append(thumbnail, meal, price, remove);

    cartContainer.append(dish_div);
  });
}
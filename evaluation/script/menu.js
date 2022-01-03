let dishContainer = document.getElementById("dishContainer");

let meal_data=JSON.parse(localStorage.getItem("Meals")) || [];
console.log('meal_data:', meal_data)

let count=0;

if (meal_data.length!=0){
    count=meal_data.length
}

let cart_count=document.getElementById("count")
      cart_count.innerText =count;





async function getItem() {
  let res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
  );
  let data = await res.json();
  console.log("data:", data);

  appendItmes(data.meals);
}

function appendItmes(item) {
  item.forEach(function (el) {
    let dish_div = document.createElement("div");

    let meal = document.createElement("h3");
    meal.innerText = el.strMeal;

    let thumbnail = document.createElement("img");
    thumbnail.src = el.strMealThumb;

    let price = document.createElement("h3");
    el.price=(Math.floor(Math.random() * 500) + 100)
  //   price.innerText = `₹ ${Math.floor(Math.random() * 500) + 100}`;

    price.innerText =`₹ ${el.price}`;

    let cart = document.createElement("button");
    cart.innerText = "Cart";

    cart.addEventListener("click",function(){
      
      meal_data.push(el)
      localStorage.setItem("Meals",JSON.stringify(meal_data))
    })

    dish_div.append(thumbnail, meal, price, cart);

    dishContainer.append(dish_div);
  });
}


getItem();
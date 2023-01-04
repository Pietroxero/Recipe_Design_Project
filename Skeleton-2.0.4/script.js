// setting arrays for reference
var searchForm = document.querySelector('main');
var searchResult = document.querySelector('.search-result');
let userInput = document.querySelector("#userInput");


//spoonacular API that will be used to fetch and pull ingredients using rapid API
//based on documentation from rapid API
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f324b5b8bmsh466e2ff07149a7cp1e32d6jsn01419d3b8f86',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

//DB cocktail
//cocktail api set up based on documentation from rapid API
const settings = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f324b5b8bmsh466e2ff07149a7cp1e32d6jsn01419d3b8f86',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

//the following will be  vars for the search buttons we will be using to fetch and append data

var searchBtn = document.querySelector("#searchBtn");
var searchCocktail = document.querySelector("#searchBtn2");


//this function is the click event listener for the first search button to search cooking ingredients by keyword
// within the listener event there is a the fetch request to spoonacular.
//not only this but within this function it is also appending the mainpage of our html to display cards that will contain images, titles, prep time and ingredients to recipes.
//this will also show a variety of cards not just one ingredient or recipe
//the cards themselves have the ability to be clicked and the user will be redirected to a webpage containing full details of the recipe they have chosen

jQuery(document).ready(function($){

searchBtn.addEventListener('click', function (event) {
	// console.log('click')
	fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${userInput.value}&offset=0&number=10&limitLicense=false&ranking=2`, options)
		.then(response => response.json())
		.then(response => {
			 console.log(response)
			for (let i = 0; i < 10; i++) {

				fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${response.results[i].id}/information`, options)
					.then(response => response.json())
					.then(response1=> {
						console.log(response.data)

						// console.log("RESPONSE1", response1)
						var recipeCon = document.createElement("div");
						recipeCon.className = 'recipe-container recipe';
						recipeCon.id = response.results[i].id;
						var recipeCard = document.createElement("div");
						recipeCard.className = 'recipe';
						var recipeTitle = document.createElement("div");
						recipeCard.className = 'recipe-title';
						var recipePhoto = document.createElement("div");
						recipePhoto.className = 'recipe-photo';
						var recipeImg = document.createElement("img");
						var recipeInst = document.createElement("div");
						recipeInst.className = 'recipe-instruction';
						var timePre = document.createElement("h6");
						timePre.className = 'time';
						timePre.innerHTML = ' Time Prepare: ';
						var cal = document.createElement("h6");
						cal.innerHTML = 'servings';
						cal.innerHTML = ' Serving: ';
						var viewRec = document.createElement("a");
						viewRec.className = 'view-btn';
						viewRec.href = response1.sourceUrl;
						viewRec.innerHTML = ' View Recipe ';

						recipeTitle.innerHTML = response.results[i].title;
						recipeCard.appendChild(recipeTitle);
						recipeCard.appendChild(viewRec);
						recipeImg.src = response.results[i].image;
						recipePhoto.appendChild(recipeImg);
						recipeCard.appendChild(recipePhoto);
						timePre.innerHTML += response1.readyInMinutes;
						recipeCard.appendChild(recipeInst);
						recipeInst.appendChild(timePre);
						recipeInst.appendChild(cal);
						recipeInst.appendChild(viewRec);
						
						recipeCon.appendChild(recipeCard);
						searchResult.appendChild(recipeCon);
						// console.log(recipeCon);
			}
					)}
					})
					.catch(err => console.error(err));

})

		

//this function is the click event listener for the second search button to search cocktails and their instructions using the alcohol keyword (ex: gin)
// within the listener event there is a the fetch request to thecocktailDB.com.
//not only this but within this function it is also appending the mainpage of our html to display cards that will contain images, titles,   ingredients to the cocktail recipe
//this will also show a variety of options not just 1
searchCocktail.addEventListener('click', function (event){
	fetch(`https://the-cocktail-db.p.rapidapi.com/search.php?s=${userInput.value}`, settings)
	.then(response => response.json())
	
	.then(response => {
		console.log("cocktail: ", response)
		for (let i = 0; i < 10; i++) {
					
					var recipeCon = document.createElement("div");
					recipeCon.className = 'recipe-container recipe';
					var recipeCard = document.createElement("div");
					recipeCard.className = 'recipe';
					var recipeTitle = document.createElement("div");
					recipeCard.className = 'recipe-title';
					var recipePhoto = document.createElement("div");
					recipePhoto.className = 'recipe-photo';
					var recipeImg = document.createElement("img");
					var recipeInst = document.createElement("div");
					recipeInst.className = 'recipe-instruction';
					var ingred = document.createElement("h6");
					ingred.className = 'ingredients';
					ingred.innerHTML = ' Ingredients: ';
					var instr = document.createElement("h6");
					instr.innerHTML = 'Instructions';
					instr.innerHTML = 'Instructions: ';




					recipeTitle.innerHTML = response.drinks[i].strDrink;
					recipeCard.appendChild(recipeTitle);
					// recipeCard.appendChild(viewRec);
					recipeImg.src = response.drinks[i].strDrinkThumb;
					recipePhoto.appendChild(recipeImg);
					recipeCard.appendChild(recipePhoto);
					instr.innerHTML += response.drinks[i].strInstructions;
					recipeInst.appendChild(ingred);
					var ingred1 = ingred.innerHTML += response.drinks[i].strIngredient1 += ", ";
					var ingred2 = ingred.innerHTML += response.drinks[i].strIngredient2 += ", ";
					var ingred3 = ingred.innerHTML += response.drinks[i].strIngredient3 += ", ";
					var ingred4 = ingred.innerHTML += response.drinks[i].strIngredient4 += ", ";
					var ingred5 = ingred.innerHTML += response.drinks[i].strIngredient5;

					// ingred5 = null;
					// if (ingred5 != null) {
					// 	ingred5.innerHTML += response.drinks[i].strIngredient5.style.display = "block"
					// }
					// else {
					// 	ingred5.innerHTML += response.drinks[i].strIngredient5.style.display = "none"
					// }

					recipeInst.appendChild(instr);
					recipeCard.appendChild(recipeInst);

					recipeCon.appendChild(recipeCard);
					console.log(recipeCon)
					searchResult.appendChild(recipeCon);
		}
	})
				
	.catch(err => console.error(err));
	
}) 

//clear button function
$("#clrhistoryBtn").on("click", function () {
	// console.log(onclick);
	localStorage.clear();
	$("#recently-searched-list").empty();
  });


  //this function will save the locations from our user input to the array and our localstorage
// function saveLocal(data){
//     var city = data.city.name;
//     locations.unshift(city);
//     localStorage.setItem('locations', JSON.stringify(locations));
// }


});


































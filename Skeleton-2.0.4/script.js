
var searchForm = document.querySelector('main');
var searchResult = document.querySelector('.search-result');
let userInput = document.querySelector("#userInput");


//spoonacular 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f324b5b8bmsh466e2ff07149a7cp1e32d6jsn01419d3b8f86',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};

fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=1', settings)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



//cocktail api set up
const settings = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f324b5b8bmsh466e2ff07149a7cp1e32d6jsn01419d3b8f86',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};


var searchBtn = document.querySelector("#searchBtn");
var searchCocktail = document.querySelector("#searchBtn2");

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
						viewRec.href = response1.sourceUrl
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
						console.log(recipeCon);
			}
					)}
					})
					.catch(err => console.error(err));

})

		


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

    
<script>
function basicPopup(url) {
popupWindow = window.open(url,'action','height=550,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
}
</script>
})
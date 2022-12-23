//random recipe api
const settings = {
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
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1f324b5b8bmsh466e2ff07149a7cp1e32d6jsn01419d3b8f86',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

fetch('https://the-cocktail-db.p.rapidapi.com/filter.php?i=Gin', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    
<script>
function basicPopup(url) {
popupWindow = window.open(url,'action','height=550,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
}
</script>
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

    $('.foodhistory').on('click', '.clrhistoryBtn', function (event) {
        event.preventDefault();
        // Collects the value from the button text
        let searchfood = $(this).text();
        // Runs the function to call the API and display retrieved data
        call(searchfood);
    });


    $('#clrhistoryBtn').on('click', function (event) {
        event.preventDefault();
        // Clears local storage
        window.localStorage.clear();
        // Clears the search history element
        $('.foodhistory').empty();
        searchHistory = [];
        renderButtons();
        // Clears and resets the form
        $('form')[0].reset();
    });
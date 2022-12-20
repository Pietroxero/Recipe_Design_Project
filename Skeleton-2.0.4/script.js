const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7dfbb0a2cbmsh2f7cbb4095725d4p16ddffjsn207b8aa817bd',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
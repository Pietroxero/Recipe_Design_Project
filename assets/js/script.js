const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "1f324b5b8bmsh466e2ff07149a7cp1e32d6jsn01419d3b8f86",
		"X-RapidAPI-Host": "tasty.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

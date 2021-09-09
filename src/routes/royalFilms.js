const scraper = require('../services/scraper');

async function get(req, res) {
	try {
		const pageTitle = await scraper.getPageTitle('https://royal-films.com/cartelera/barranquilla');
		const allMoviesDetails = await scraper.getAllMoviesDetails('https://royal-films.com/cartelera/barranquilla');
		//const pageBody = await scraper.getPageBody('https://royal-films.com/cartelera/barranquilla');
		res.writeJSONResponse({ data: { pageTitle,allMoviesDetails} }, 200);
	} catch(err) {
		res.writeJSONResponse({ data: null, err: err.message }, 500);
	}
}

module.exports = {
	get,
};

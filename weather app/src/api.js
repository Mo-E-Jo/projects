const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60';
export const geoApioptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '93a476110dmsh99c4f6a9cb3a4b1p1cd57ajsn1a7f0a149b4e',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GRO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60"

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
/**
 * Leaflet.geojsonCSS
 * @author Alexander Burtsev, http://burtsev.me, 2014
 * @license MIT
 */
(function (window, document, undefined) {
	if ( !window.L || !L.GeoJSON ) {
		throw new Error('Namespace \'L\' not found');
	}

	L.GeoJSON.addInitHook(function() {
		// @todo
		console.log('Hello, GeoJSON CSS!');
	});
})(window, document);
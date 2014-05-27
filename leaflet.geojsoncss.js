/**
 * Leaflet.geojsonCSS
 * @author Alexander Burtsev, http://burtsev.me, 2014
 * @license MIT
 */
(function (window, document, undefined) {
	if ( !window.L || !L.GeoJSON ) {
		return;
	}

	L.GeoJSON.CSS = L.GeoJSON.extend({
		initialize: function (geojson, options) {
			var styledOptions = L.extend({}, options, {
				onEachFeature: function(geojson, layer) {
					if ( options && options.onEachFeature ) {
						return options.onEachFeature(geojson, layer);
					}

					var style = geojson.style;
					if ( style ) {
						if ( layer instanceof L.Marker && style.icon ) {
							layer.setIcon(L.icon(style.icon));
						} else {
							layer.setStyle(style);
						}
					}
				}
			});			

			L.setOptions(this, styledOptions);

			this._layers = {};

			if (geojson) {
				this.addData(geojson);
			}
		}
	});

	L.geoJson.css = function (geojson, options) {
		return new L.GeoJSON.CSS(geojson, options);
	};
})(window, document);
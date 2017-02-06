/**
 * Leaflet.geojsonCSS
 *
 * @author Alexander Burtsev, http://burtsev.me, 2014
 * @author José María Martínez, jmmluna@gmail.com, http://about.me/jmmluna, 2017
 * @license MIT
 */
(function (window, document, undefined) {
	if ( !window.L || !L.GeoJSON ) {
		return;
	}

	function getStyleDescription(style) {
			
			var desc = getAttributeValue(style, "fillColor") + 
					   getAttributeValue(style, "fill-Opacity") + 
					   getAttributeValue(style, "weight") + 
					   getAttributeValue(style, "color") + 
					   getAttributeValue(style, "opacity"); 
			return	desc;	   	

	}

	function getAttributeValue(style, attributeName) {
		var value = "";
		if(style[attributeName]) {
			value = "<b>" + attributeName + ":</b> " + style[attributeName] + "<br>";
		}
		return value;
	}

	L.GeoJSON.CSS = L.GeoJSON.extend({
		initialize: function (geojson, options) {

			var layerStyle = geojson.style;


			var styledOptions = L.extend({}, options, {
				onEachFeature: function(feature, layer) {
   					
					var featureHeader = "<h3>" + feature.properties.title + "</h3><hr>";
                    if(feature.style) {

                    	if ( layer instanceof L.Marker ) {
							if ( feature.style.icon ) {
								layer.setIcon(L.icon(feature.style.icon));
							}
						}
						else {
							layer.setStyle(feature.style);
						}
						
						layer.bindPopup(featureHeader + "<br>" + getStyleDescription(feature.style));
					}
					else {
						layer.setStyle(layerStyle);
						layer.bindPopup(featureHeader + "<br>" + getStyleDescription(layerStyle));
					}						

					layer.on('mouseover', function (e) {
			            this.openPopup();
			        });
			        layer.on('mouseout', function (e) {
			            this.closePopup();
			        });

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
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

	function setPopPup(feature, json) {
		
		feature.on('click', function (e) {				
			feature.bindPopup(getContent(json));		
			this.openPopup();
		});

		if ( !(feature instanceof L.Marker) ) {
			feature.on('mouseover', function (e) {
				var highlight = {
					color: '#2262CC',
		        	weight: 3,		                   
		        	fillColor: '#2262CC'
				};

				feature.setStyle(highlight);			           
			});
		}

	}

	function getContent(feature) {
		var popupContent = '<table>';
		for (var p in feature.properties) {
			popupContent += '<tr><td><b>' + p + ':</b></td><td>'+ feature.properties[p] + '</td></tr>';
		}
		
		popupContent += '</table>';
		return 	popupContent;			
	}


	function getLayerMarkerStyle(style, latlng) {
		if ( style.icon ) {
			var smallIcon = new L.Icon({
				iconSize: style.icon.iconSize,
     			iconAnchor: style.icon.iconAnchor,
     			popupAnchor:  style.icon.popupAnchor,							    
				iconUrl:  style.icon.iconUrl
			});

			return new L.Marker(latlng,{icon: smallIcon});
		}

		return new L.CircleMarker(latlng, style);	
	}

	function setStyle(feature, style) {
		if ( !(feature instanceof L.Marker) ) {                    		
			feature.setStyle(style);

			feature.on('mouseout', function (e) {							
				           feature.setStyle(style);
				        });							
		}
	}

	L.GeoJSON.CSS = L.GeoJSON.extend({
		initialize: function (geojson, options) {

			var layerStyle = geojson.style;


			var styledOptions = L.extend({}, options, {

				 pointToLayer: function (feature, latlng) {   
				 	var featureStyle = feature.style;

                    if ( featureStyle ) {							
						return getLayerMarkerStyle(featureStyle, latlng);													
		            }		            
		            else if(layerStyle) {
		            	return  getLayerMarkerStyle(layerStyle, latlng);		            	
		        	}
		        	else {
		        		//default point layer
		        		return new L.Marker(latlng, {});
		        	}
		            
		          },

				onEachFeature: function(json, feature) {
   										
                    if(json.style) {                    	
                    	setStyle(feature, json.style);																		
					}
					else if(layerStyle) {							
						setStyle(feature, layerStyle);				
					}		

					setPopPup(feature, json);
					
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
Leaflet.geojsonCSS
==================
This example shows the load of a GeoJSON CSS file that contains layer-level and feature-level styles.

![Screenshot](https://github.com/jmmluna/Leaflet.geojsonCSS/blob/master/demo-layer-and-feature-style/screenshot.png)

## Example of GeoJSON with CSS

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "1",
        "PROVINCIA": "ALMERIA"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -3.127089372266458,
              36.75180592817662
            ],
            [
              -3.138916039291873,
              36.78799603402172
            ],

         ....
            
            [
              -3.0192100126651,
              36.747121439125834
            ],
            [
              -3.127089372266458,
              36.75180592817662
            ]
          ]
        ]
      },
      "style": {
        "color": "#CC0000",
        "weight": 2,
        "fillColor": "red",
        "fill-Opacity": 0.6,
        "opacity": 1,
        "dashArray": "3, 5"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "2",
        "PROVINCIA": "CADIZ"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -6.329785186442203,
              36.90199044374208
            ],
            [
              -6.274720106098667,
              36.913213322685685
            ],

           ....
            
            ],
            [
              -6.351579262802948,
              36.83641736554336
            ],
            [
              -6.3448150175339775,
              36.89026442003388
            ],
            [
              -6.329785186442203,
              36.90199044374208
            ]
          ]
        ]
      }
    },
    ....

    
          ]
        ]
      }
    }
  ],
  "style": {
    "fill": true,
    "fillColor": "#006400",
    "fill-Opacity": 0.5,
    "weight": 15,
    "color": "#FFFACD",
    "opacity": 1
  }
}
```

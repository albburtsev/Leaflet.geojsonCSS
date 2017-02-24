Leaflet.geojsonCSS
==================
This example shows the load of a GeoJSON CSS file that contains layer-level and feature-level styles.

![Screenshot](https://github.com/jmmluna/Leaflet.geojsonCSS/blob/master/demo-layer-and-feature-style/screenshot.png)

## Description

When setting feature-level style only, we can find different stages where all or most features share the same style. In this context, we have to define this style for each feature, causing data duplicity and redundancy, so layer file size gets bigger.

For this reason, I created this version of the plug-in as a complement os the first version. In this, you can set layer-level style, so you can assign one single style to all features using just a style declaration. However, you can still define feature-level style if you need it. Therefore, this plug-in provides flexibility and avoids style data redundancy.


## Example of GeoJSON with CSS

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "1",
        "title": "ALMERIA"
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
        "fillOpacity": 0.6,
        "opacity": 1,
        "dashArray": "3, 5"
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "2",
        "title": "CADIZ"
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
    "fillOpacity": 0.5,
    "weight": 15,
    "color": "#FFFACD",
    "opacity": 1
  }
}
```

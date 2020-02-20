# Motivation

There is no support to use custom Mapbox Vector Tile (MVT) server in ArcGIS JavaScript API, so I decided to learn if there is a way to do it. 

Briefly, I made a quick research and created this example to show the way of use a MVT service. 
I have to say that I came up with this [forum post](https://community.esri.com/thread/236219-is-it-possible-to-render-mapbox-vector-tiles-pbf-in-arcgis-javascript-api-411) , and inspired me to build this example project to verify it. 

`https://tile.nextzen.org/tilezen/vector/v1/512/all/{z}/{x}/{y}.mvt` is used as Mapbox Tile Server endpoint to use with ArcGIS JS API (4.14).

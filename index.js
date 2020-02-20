const express = require('express')
const app = express()
const port = 3000

app.get('/vectorserver', function (req, res) {
    let response =
    {
        "currentVersion": 10.7,
        "name": "Test",
        "capabilities": "TilesOnly",
        "type": "flatVector",        
        "tiles": ["https://tile.nextzen.org/tilezen/vector/v1/512/all/{z}/{x}/{y}.mvt?api_key=NaqqS33fTUmyQcvbuIUCKA"],
        "exportTilesAllowed": false,
        "initialExtent": {
            "xmin": -2.0037507067161843E7,
            "ymin": -2.0037507067161843E7,
            "xmax": 2.0037507067161843E7,
            "ymax": 2.0037507067161843E7,
            "spatialReference": {
                "cs": "pcs",
                "wkid": 102100
            }
        },
        "fullExtent": {
            "xmin": -2.0037507067161843E7,
            "ymin": -2.0037507067161843E7,
            "xmax": 2.0037507067161843E7,
            "ymax": 2.0037507067161843E7,
            "spatialReference": {
                "cs": "pcs",
                "wkid": 102100
            }
        },
        "tileInfo": {
            "rows": 512,
            "cols": 512,
            "dpi": 96,
            "format": "pbf",
            "origin": {
                "x": -2.0037508342787E7,
                "y": 2.0037508342787E7
            },
            "spatialReference": {
                "wkid": 102100,
                "latestWkid": 3857
            },
            "lods": [{
                "level": 0,
                "resolution": 78271.51696399994,
                "scale": 2.95828763795777E8
            }, {
                "level": 1,
                "resolution": 39135.75848200009,
                "scale": 1.47914381897889E8
            }, {
                "level": 2,
                "resolution": 19567.87924099992,
                "scale": 7.3957190948944E7
            }, {
                "level": 3,
                "resolution": 9783.93962049996,
                "scale": 3.6978595474472E7
            }, {
                "level": 4,
                "resolution": 4891.96981024998,
                "scale": 1.8489297737236E7
            }, {
                "level": 5,
                "resolution": 2445.98490512499,
                "scale": 9244648.868618
            }, {
                "level": 6,
                "resolution": 1222.992452562495,
                "scale": 4622324.434309
            }, {
                "level": 7,
                "resolution": 611.4962262813797,
                "scale": 2311162.217155
            }, {
                "level": 8,
                "resolution": 305.74811314055756,
                "scale": 1155581.108577
            }, {
                "level": 9,
                "resolution": 152.87405657041106,
                "scale": 577790.554289
            }]
        },
        "minLOD": 0,
	    "maxLOD": 9,
        "resourceInfo": {
            "styleVersion": 8,
            "tileCompression": "gzip"
        }
    };
    res.send(response);
})
app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${port}!`));
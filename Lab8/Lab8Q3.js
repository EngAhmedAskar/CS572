// 1-Depend
var express = require('express');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient;

// 2-instantiation

var app = express();
var router = express.Router();
var jsonParser = bodyParser.json();


// 3-Configuration
app.set('env', 'development');
app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);

//4- middleware
app.use(express.urlencoded());
app.use(bodyParser.json());
router.use(function (req, res, next) {
   
    console.log('Something is happening.');
    next();
});



//5- Routing
function insertnode(name, category, longitude, latitude) {
    console.log(name, category, longitude, latitude);
    MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
        const db = client.db("lab8");
        var query = {
            'name': name,
            'category': category,
            'location': [longitude, latitude]
        };
       
        db.collection("xxpoints").insert(query, (err, doc) => {
            if (err) {
                throw err;
            }
            console.log(JSON.stringify(doc));
            client.close();
        });
    });
}


function findNodes(res) {
    MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
        const db = client.db("lab8");
        createindexdb.collection("xxpoints").createIndex({'location':'2d'},()=>{
            console.log("created");
        });

        var cursor = db.collection("xxpoints").find({
            location: {
                $near: [-91.9665342, 41.017654]
            }
        }).limit(2);

        var result = [];
        cursor.forEach((doc, err) => {
            result.push(doc);
        }, function () {
            console.log(result.length);
            client.close();
            res.end(JSON.stringify(result));
        });

    });
}



router.route('/locations').post(function (req, res) {
        
        console.log(req.body);

        var name = req.body.name;
        var category = req.body.category;
        var longitude = req.body.location[0];
        var latitude = req.body.location[1];
        insertnode(name, category, longitude, latitude);
        res.end("Location inserted :)");
    })

    .get(function (req, res) {
         response.send(req.body);

    });

app.get('/api/nearest', (req, res, next) => {
    console.log("get nearest request");
    findNodes(res);
});



app.use('/api', router);

// 7-Bootup
app.listen(4444, () => {
    console.log("Listening to 8081");
});
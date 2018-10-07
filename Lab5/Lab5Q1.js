// 1-
const express = require('express');
const fetch = require('node-fetch');
const rxjs = require('rxjs');
const {from:rxjsFrom} = rxjs;
const {map:rxjsMap} = require('rxjs/operators');
// 2-
let app = express();
let port = 3377;
// 3-
app.set('env', 'development');
app.enable('trust proxy');
app.enable('case sensitive routing');
app.set('strict routing', true);
app.set('x-powered-by', false);
// 4-
function retrieveJsonData(){
    console.log('Retrieving Data from JSON Server');
    return new Promise(function(resolve, reject){
    fetch('http://jsonplaceholder.typicode.com/users/')
        .then(res => {
            console.log('Data Retrieved !');
           
            resolve(res.json());
        })
        .catch((error) => Console.log(error));
    });
}

app.get('/users', function(request,response){
    response.status(200);

  
    let fetchUsersPromise = fetch('http://jsonplaceholder.typicode.com/users/');
    fetchUsersPromise
        .then(res => res.json())
        .then(json => response.json(json))
        .catch((error) => Console.log(error));

   from(fetchUsersPromise).subscribe(res => res.json());
    rxjsFrom(retrieveJsonData())
        .subscribe((data) => response.json(data)); 

   
    rxjsFrom(fetch('https://api.github.com/users/github'))
        .pipe( rxjsMap( (data) => {
            console.log(data);
            return JSON.parse('{"login": "github","id": 9919}');
        } ) )   
        .subscribe((data) => response.json(data)); 
    
    (async function () {
        try{
            console.log('Async - Await Solution');
            const res = await fetch('http://jsonplaceholder.typicode.com/users/');
            const json = await res.json();
            response.json(json);
        }catch(error){
            console.log(error);
        }
    })();

});
// 7-
app.listen(port, function(){
    console.log('The Server is running on port %s', port);
});
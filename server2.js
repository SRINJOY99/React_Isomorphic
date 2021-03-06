var express = require('express');
var app = express();
var port = process.env.PORT || 9800;
const path = require('path');


var city = [
    {
        "_id":1,
        "name": "Pitampura, New Delhi",
	    "city_name":"Delhi",
        "city":1,
        "area":11,
        "country_name" :"India"
    },
    {
        "_id": 2,
        "name": "Ashok Vihar Phase 2",
        "city_name":"Delhi",
        "city": 1,
        "area":12,
        "country_name":"India"
    },
    {
        "_id": 3,
        "name": "Laxmi Nagar",
        "city_name":"Delhi",
        "city": 1,
        "area":13,
        "country_name":"India"
    },
    {
        "_id": 4,
        "name": "Lajpat Nagar 2",
        "city_name":"Delhi",
        "city": 1,
        "area":14,
        "country_name":"India"
    },
    {
        "_id": 5,
        "name": "Borivali West",
        "city_name":"Mumbai",
        "city": 2,
        "area":21,
        "country_name":"India"
    },
    {
        "_id": 6,
        "name": "Mira Road",
        "city_name":"Mumbai",
        "city": 2,
        "area":22,
        "country_name":"India"
    },
    {
        "_id": 7,
        "name": "Sion",
        "city_name":"Mumbai",
        "city": 2,
        "area":23,
        "country_name":"India"
    },
    {
        "_id": 8,
        "name": "Mohammad Ali Road",
        "city_name":"Mumbai",
        "city": 2,
        "area":24,
        "country_name":"India"
    },
    {
        "_id": 9,
        "name": "Magarpatta",
        "city_name":"Pune",
        "city": 3,
        "area":31,
        "country_name":"India"
    },
    {
        "_id": 10,
        "name": "Koregaon Park",
        "city_name":"Pune",
        "city": 3,
        "area":32,
        "country_name":"India"
    },
    {
        "_id": 11,
        "name": "Rajajinagar",
        "city_name":"Bangalore",
        "city": 4,
        "area":41,
        "country_name":"India"
    },
    {
        "_id": 12,
        "name": "Koramangala 6th Block",
        "city_name":"Bangalore",
        "city": 4,
        "area":42,
        "country_name":"India"
    },
    {
        "_id": 13,
        "name": "Sector70, Chandigarh",
	    "city_name":"Chandigarh",
        "city": 5,
        "area":51,
        "country_name": "India"
    },
    {
        "_id": 14,
        "name": "Sector 28, Chandigarh",
	    "city_name":"Chandigarh",
        "city": 5,
        "area":52,
        "country_name": "India"
    }
]




app.use(express.static(path.join(__dirname,'build')));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'build/index.html'))
});

app.get('/city',(req,res) => {
    res.send(city)
});





app.listen(port,(err)=> {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})
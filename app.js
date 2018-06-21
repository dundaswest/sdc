const fs = require('fs');
const csv = require('fast-csv');
const pool = require('./pgdb');

pool.connect((err) => {
    if(err)
    {
        console.log(err);
    }
});

let counter = 0;

// let header = [];
// let data = [];

const csvStream = csv.fromPath('.\\example.csv', { headers: true })
  .on('data', (record) => {
        csvStream.pause();
        if(counter < 100)
        {
            let id = record.id;
            let name = record.name;
            let pictureurl = record.pictureurl;

            pool.query("INSERT INTO FL_insurance_sample(policyID, statecode, county, point_latitude, point_longitude, line, construction) \
            VALUES($1, $2, $3, $4, $5, $6, $7)", [policyID, statecode, county, point_latitude, point_longitude, line, construction], function(err){
                if(err)
                {
                    console.log(err);
                }
            });
            ++counter;
        }

        csvStream.resume();

    }).on('end', () => {
        console.log("Job is done!");
    }).on('error', (err) => {
        console.log(err);
    });

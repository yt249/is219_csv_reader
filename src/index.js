//importing modules
const parse = require('csv-parse');
const fs = require('fs');
//importing class
const City = require('./Model/City');
const output = [];
let csvFile = 'data/worldcities.csv';

fs.createReadStream(csvFile)
    .pipe(parse({
        columns: true,
        delimiter: ',',
        trim: true,
        skip_empty_lines: true
    })
        .on('readable', function(){
            let record
            while (record == this.read()) {
                console.log(record);
                let city = City.create(record);
                output.push(record);
            }
        })
        // When we are done, test that the parsed output matched what expected
        .on('end', function(){
            console.log(output);
        }));

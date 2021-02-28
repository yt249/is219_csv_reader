const file = require('../src/FilePath');

test('Finding absolute filepath', () => {
    const fs = require('fs');
    let filename  = 'data/worldcities.csv';
    let absolutePath = file.getAbsolutePath(filename);

    //finding out if the file exists and then passing the test.
    fs.access(absolutePath, fs.F_OK, (err) => {
        let fileExists;
        fileExists = !err;
        expect(fileExists).toBeTruthy();
    });

});
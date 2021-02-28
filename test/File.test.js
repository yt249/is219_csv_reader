const fs = require('fs');

test('Finding absolute filepath', () => {
    const Filepath = require('../src/FilePath');
    let filename  = '../../data/worldcities.csv';
    let absolutePath = Filepath.getAbsolutePath(filename);

    //finding out if the file exists and then passing the test.
    fs.access(absolutePath, fs.F_OK, (err) => {
        let fileExists;
        fileExists = !err;
        expect(fileExists).toBeTruthy();
    });

});


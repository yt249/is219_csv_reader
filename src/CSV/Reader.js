class Reader{
    static printRecords(filename, Model){
        const filePath = require('../FilePath');
        // Include fs module
        const fs = require('fs');
        const parse = require('csv-parse/lib/sync');

        let absolutePath = filePath.getAbsolutePath(filename);
        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
            skip_empty_lines: true
        };
        let contents = fs.readFileSync(absolutePath);
        const record = parse(contents, options);
        let list = Array();
        record.forEach(function (data) {
            list.push(Model.create(data));
        });
        return list;
    }
}
module.exports = Reader;
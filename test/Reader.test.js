
test('Reading CSV File', () => {
    const Reader = require('../src/CSV/Reader');
    const City = require('../src/Model/City');

    let filename  = 'data/worldcities.csv';
    let records = Reader.printRecords(filename, City);
    expect(records.length).toBe(6);
});
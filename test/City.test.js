const City = require('../src/Model/City')

test('Creating a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('Creating a city object by factory', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});
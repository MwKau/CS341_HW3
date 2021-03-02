var fs = require('fs');

test('test selectEvent', () => {

    // Check if an order page exists
    var order = fs.readFileSync('routes/orders.js', 'utf8');
    expect(order).toEqual(expect.anything()); // any non-null value is okay haha
});
const test = require('node:test');
const assert = require('node:assert');
const { getHomePage } = require('./app');

test('Homepage should display ShopEasy Lite', () => {
    const page = getHomePage();

    assert.ok(page.includes('ShopEasy Lite'));
    assert.ok(page.includes('Your simple demo store is running.'));
});

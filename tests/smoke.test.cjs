const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('project has Vite entry files', () => {
  assert.equal(fs.existsSync('index.html'), true);
  assert.equal(fs.existsSync('src'), true);
});

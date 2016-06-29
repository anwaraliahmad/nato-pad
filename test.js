var natoPad = require('./');
var test = require('tape');

test('nato-pad', function(t) {
  t.plan(3);
  t.strictEqual(natoPad("Hello"), "HOTEL ECHO LIMA LIMA OSCAR");
  t.strictEqual(natoPad("World!"), "WHISKEY OSCAR ROMEO LIMA DELTA!");
  t.strictEqual(natoPad("..."), "...");
});

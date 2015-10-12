var chai = require('chai'),
    should = chai.should(),
    chai_promise = require('chai-as-promised'),
    folder = require('../index');

  chai.use(chai_promise);


describe('node-folder', function() {
  it('should create', function() {
    // Will Pass
    folder('build/src').should.be.fulfilled;

    // Will Pass (won't create 'one, two & three folders'),
    // Use sudo rm --fr build to remove the folder
    folder('build/src/{one,two,three}', 0000).should.eventually.be.rejected;

    // Not really a test, but an example for using 'then - catch' blocks
    folder('build/{src/{assets/{styles,scripts,fonts,images,vendor},contents/{posts,pages},templates/partials},dest,test}', 0777).then(
      function(success) {
        console.log("success");
      },
      function(err) {
        console.log(err);
      }
    );
  })
});

const mkdirp  = require('mkdirp');
const expand  = require('brace-expansion');

module.exports = function(path, mode){
  return new Promise(function(resolve, reject) {
    expand(path).map(function(ePath) {
      mkdirp(ePath, mode, function(err) {
        if(err) {reject(err);}
        else {resolve();}
      });
    });
  });
};

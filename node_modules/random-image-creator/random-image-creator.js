var randomWords = require('random-words');
var Random = require("random-js");
var random = new Random(Random.engines.mt19937().autoSeed());

module.exports = function(DimX, DimY){
    return 'http://placehold.it/'+DimX+'x'+DimY+'/'+random.hex(6)+'/'+random.hex(6)+'?text='+randomWords({ exactly: 1});
};






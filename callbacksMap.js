var words = ["ground", "control", "to", "major", "tom"];

function map(words, callback) {
  var result = [];
  for(var i = 0; i < words.length; i++){
    var value = callback(words[i]);
    result.push(value);
  }
  return result;

}

var result1 = map(words, function(word) {
  return word.length;
});

var result2 = map(words, function(word) {
  return word.toUpperCase();
});

var result3 = map(words, function(word) {
  return word.split('').reverse().join('');
});

console.log(result1);
console.log(result2);
console.log(result3);

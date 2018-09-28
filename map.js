
var words = ["ground", "control", "to", "major", "tom"];

function map(words, callback) {
    var newArray = [];
    for(var i = 0; i < words.length; i++) {
        newArray.push(callback(words[i], i, words));  
    }
    return newArray;
}

var wordLengths = map(words, function(x) {
    return x.length;
});

var wordUppercase = map(words, function(x) {
    return x.toUpperCase();
});

var wordMangle = map(words, function(x) {
    return x.split('').reverse().join('');
});

console.log(wordLengths);
console.log(wordUppercase);
console.log(wordMangle);
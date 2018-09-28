var countdownGenerator = function (x) {
    var startCount = x;

    return function() {
        console.log(startCount--); 
      }

  };
  
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!
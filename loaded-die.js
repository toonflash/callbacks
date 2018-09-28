function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var counter = 0;
   
    return function() {
      return list[counter++];
    }
  }
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // counter 0 - 5 ++ counter 1
  console.log(rollLoadedDie());  //counter 1 - 4 ++ counter 2
  console.log(rollLoadedDie());  // counter 2 -

//   var anotherDie = makeLoadedDie();
  
//   console.log(anotherDie());  // counter 0 - 5 ++ counter 1
//   console.log(anotherDie());  //counter 1 - 4 ++ counter 2
//   console.log(anotherDie());  // counter 2 -



// var i = [10,20,30,40,50]
// var index = 0;
// console.log(i[0]); //10 
// i[index] //10

// i[index+2]

// i[index++]
// i[index]

// i[++index]

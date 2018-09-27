
function findWaldo(arr, found) {

// FOR LOOP VERSION //
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       var index = i;
//       found(index);   // execute callback
//     }
//   }

// FOREACH VERSION //
arr.forEach(function(name, index){
    if (name === "Waldo") {
        found(index);
    }
  });
}

function actionWhenFound(index) {
    var currentIndex = index;
  console.log("Found Waldo at index " + currentIndex + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

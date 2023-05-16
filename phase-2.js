function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    if (timeLeft < 1) {
        reject("Error: you don't have enough time to stretch");
    } else {
        setTimeout(() => {
            console.log("done stretching");
            resolve(timeLeft - 1);
        }, 1000);
    }
});
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    if (timeLeft < 0.5) {
        reject("Error: you don't have enough time to run on treadmill");
    } else {
        setTimeout(() => {
            console.log("done runnning on treadmill");
            resolve(timeLeft - 0.5);
        }, 500);
    }
});
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    if (timeLeft < 2) {
        reject("Error: you don't have enough time to lift weights");
    } else {
        setTimeout(() => {
            console.log("done lifting weights");
            resolve(timeLeft - 2);
        }, 2000);
    }
});
}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime)
    .then(timeLeft => runOnTreadmill(timeLeft))
    .then(timeLeft => liftWeights(timeLeft))
    .then(() => console.log("done working out"))
    .catch(err => console.error(err))
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


//workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


//workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


//workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left
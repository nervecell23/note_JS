var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
          console.log(counter)
          throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
        } else {
          console.log(counter)
          console.log("Assertion Passed:" + assertionToCheck + " is truthy")
        }
    }
};


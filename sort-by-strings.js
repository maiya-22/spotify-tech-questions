// Question 1:  sort the letters in one stings by the order the occur in another string.

// I tried to make the variable names self-documenting.
// Used the built-in JS sort method because of efficiency (merge-sort or quick-sort depending on browser).
// The split() and join() methods each add one loop, but it they are not nested, so still efficient.
const sortByStrings = function(unsortedString, keyString) {
  return unsortedString
    .split("")
    .sort((unsortedCharacterA, unsortedCharacterB) => {
      return (
        keyString.indexOf(unsortedCharacterA) >
        keyString.indexOf(unsortedCharacterB)
      );
    })
    .join("");
};

// console.log(sortByStrings("weather", "therapyw"));
// console.log(sortByStrings("good", "odg"));

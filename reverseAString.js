/* Create a function that takes a string as input and returns the string reversed.
Example:
Input: "hello"
Output: "olleh" */

const reverseFunction = (text) => {
    var resultString = "";
    for (let i = text.length - 1; i >= 0 ; i--) {
        resultString += (text.charAt(i))
    }

    console.log(resultString);
  
}

reverseFunction("hello");

// Problem Statement

// Given a string s containing just the characters "(", ")", "{", "}", "[" and "]",
// determine if the input string is valid.
// An input string is valid if:
//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

//? Input and Output
//? "()[]{}" -> true
//? "([{}])" -> true
//? "(]" -> false
//? "(()" -> false



const validateParentheses = (inputString) => {
    const arrayAsStack = [];
    const parenthesesMap = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for (const aParentheses of inputString) {
        if ((aParentheses == "(") || (aParentheses == "{") || (aParentheses == "[")) {
            arrayAsStack.push(aParentheses);
        }
        else {
            if (arrayAsStack.length != 0) {
                const lastElement = arrayAsStack[arrayAsStack.length - 1];
                if (lastElement == parenthesesMap[aParentheses]) {
                    arrayAsStack.pop();
                }
                else return false;
            }
            else
                return false;
        }
    }
    if (arrayAsStack.length == 0) return true;
    else return false;
}

console.log(validateParentheses(")){}"));     // ❌ false

console.log(validateParentheses("()"));       // ✅ true
console.log(validateParentheses("({[]})"));   // ✅ true
console.log(validateParentheses("({[})"));    // ❌ false
console.log(validateParentheses(")){}"));     // ❌ false
console.log(validateParentheses("{{[()]}}")); // ✅ true



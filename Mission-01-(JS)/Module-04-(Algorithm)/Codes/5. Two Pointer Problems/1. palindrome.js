//Problem Statement

//A palindrome is a word, phrase, or sequence of characters that reads the same backward as it does forward.

//Your task is to write a JavaScript function, isPalindrome(str), that takes a string str
//and returns true if the string is a palindrome, and false otherwise.

//The function must work for complex phrases, not just single words. To do this, your function must:
//   Be case-insensitive (i.e., 'R' is treated the same as 'r').
//   Ignore all non-alphanumeric characters (i.e., spaces, punctuation like commas, colons, periods, etc.).

//? Input and Output
// "A man, a plan, a canal: Panama" -> true
// "Level" -> true
// "car" -> false


// ---------------------- Way -01 ----------------------

const isPalindrome = (str) => {
    const caseInsensitiveString = str.toLowerCase();
    const normalizedString = caseInsensitiveString.replace(/[^a-zA-Z0-9]/g, "");

    const reversedString = normalizedString.split("").reverse().join("");

    return reversedString==normalizedString ;
}
console.log("Output:1");
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("car"));
console.log(isPalindrome("Level"));



// ---------------------- Way-02 ----------------------

const isPalindromeTwoPointer = (str) => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let left=0, right=normalized.length-1;

    while(left<right) {
        if(normalized[left] != normalized[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log("Output:2");
console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama"));
console.log(isPalindromeTwoPointer("car"));
console.log(isPalindromeTwoPointer("Level"));
function firstNonRepeatedChar(str) {
    // Create an object to store character counts
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
        }
    }

    // If no non-repeating character is found, return null
    return null;
}

// Example usage:
console.log(firstNonRepeatedChar('aabbcdd')); // Output: 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // Output: null
console.log(firstNonRepeatedChar(''));        // Output: null
console.log(firstNonRepeatedChar('abcd'));    // Output: 'a'
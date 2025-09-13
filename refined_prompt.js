/**
 * Converts any input string into camelCase format
 * @param {string} input - The string to convert to camelCase
 * @returns {string} The camelCase formatted string
 */
function toCamelCase(input) {
    // Error handling: check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Return empty string for empty input
    if (input.length === 0) {
        return '';
    }

    // Remove all special characters except alphanumeric and spaces
    // This regex keeps letters, numbers, and spaces
    const cleaned = input.replace(/[^a-zA-Z0-9\s]/g, ' ');

    // Split by one or more whitespace characters and filter out empty strings
    const words = cleaned.split(/\s+/).filter(word => word.length > 0);

    // Return empty string if no valid words remain
    if (words.length === 0) {
        return '';
    }

    // Convert to camelCase
    return words
        .map((word, index) => {
            // Convert word to lowercase first
            const lowerWord = word.toLowerCase();
            
            // First word stays lowercase, subsequent words get first letter capitalized
            if (index === 0) {
                return lowerWord;
            } else {
                return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
            }
        })
        .join('');
}

module.exports = toCamelCase;
/**
 * Converts any input string into dot.case format
 * @param {string} input - The string to convert to dot.case
 * @returns {string} The dot.case formatted string
 */
function toDotCase(input) {
    // Error handling: check if input is a string
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Return empty string for empty input
    if (input.length === 0) {
        return '';
    }

    // Remove all special characters except alphanumeric and spaces
    // This regex keeps letters, numbers, and spaces
    const cleaned = input.replace(/[^a-zA-Z0-9\s]/g, ' ');

    // Split by one or more whitespace characters and filter out empty strings
    const words = cleaned.split(/\s+/).filter(word => word.length > 0);

    // Return empty string if no valid words remain
    if (words.length === 0) {
        return '';
    }

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

module.exports.toDotCase = toDotCase;

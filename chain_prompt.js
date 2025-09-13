function toKebabCase(input) {
    // Step 3: Error Handling - Input validation
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    
    // Trim whitespace
    const trimmed = input.trim();
    
    // Return empty string for empty input
    if (trimmed === '') {
        return '';
    }
    
    // Step 1: Basic Conversion - Handle camelCase and PascalCase
    // Insert hyphens between lowercase-uppercase transitions
    let result = trimmed.replace(/([a-z])([A-Z])/g, '$1-$2');
    
    // Step 2: Delimiter Handling - Replace spaces, underscores, and other delimiters with hyphens
    result = result.replace(/[\s_]+/g, '-');
    
    // Remove special characters (keep only alphanumerics and hyphens)
    result = result.replace(/[^a-zA-Z0-9-]/g, '');
    
    // Convert to lowercase
    result = result.toLowerCase();
    
    // Collapse multiple hyphens into one
    result = result.replace(/-+/g, '-');
    
    // Remove leading and trailing hyphens
    result = result.replace(/^-+|-+$/g, '');
    
    return result;
}
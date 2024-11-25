// Example function definition
function isContinuousColor(color) {
    // Assume some logic to determine if the color is continuous
    // For example, checking if the color is in a gradient range
    return color.startsWith('linear-gradient');
}

// Example usage of the conditional check
let colorValue = '#336699'; // Example color value
if (isContinuousColor(colorValue)) {
    console.log('The color is continuous.');
} else {
    console.log('The color is not continuous.');
}

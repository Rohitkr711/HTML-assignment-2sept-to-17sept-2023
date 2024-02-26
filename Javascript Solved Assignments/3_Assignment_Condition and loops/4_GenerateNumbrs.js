const num1 = 1;
const num2 = 20;


function generateNumbersInRange(start, end) {
    const result = [];
    
    for (let i = start + 1; i <= end; i++) {
        result.push(i);
    }
    return result;
}
console.log(`Output: ${generateNumbersInRange(num1, num2)}`);
function calculateNumbers(a, b) {
    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const quotient = b !== 0 ? a / b : 'undefined'; // Avoid division by zero

    return {
        sum,
        difference,
        product,
        quotient
    };
}
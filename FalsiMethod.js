// Define the function f(x) - Example function: f(x) = x^3 - x - 2
function f(x) {
    return x ** 3 - x - 2;
}

// Regula Falsi (False Position) method implementation
function regulaFalsiMethod(a, b, tol = 0.0001) {
    let k = 1; // Iteration counter
    let xk = a; // Initial guess for the root
    let fk = f(xk); // f(xk)

    // Start the loop for Regula Falsi method
    while (true) {
        // Calculate xk using the formula: xk = (a * f(b) - b * f(a)) / (f(b) - f(a))
        xk = (a * f(b) - b * f(a)) / (f(b) - f(a));
        fk = f(xk);
        
        // Print the current iteration results
        console.log(`Iteration ${k}: xk = ${xk}, f(xk) = ${fk}`);
        
        // Check for convergence (stopping criteria)
        if (Math.abs(f(xk)) <= tol) {
            console.log(`The required root is: ${xk}`);
            break;
        }

        // Update the bounds based on the function values at the bounds and midpoint
        if (f(a) * fk < 0) {
            b = xk; // Root is between a and xk
        } else {
            a = xk; // Root is between xk and b
        }

        // Increment the iteration counter
        k++;
    }

    return xk;
}

// Example usage with a = 1, b = 2
let a = 1;
let b = 2;
regulaFalsiMethod(a, b);

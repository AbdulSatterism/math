// Define the function f(x) - Example function: f(x) = x^3 - x - 2
function f(x) {
    return x ** 3 - x - 2;
}

// Secant method implementation
function secantMethod(x1, x0, tol = 0.0001) {
    let k = 1; // Iteration counter
    let xk = x1; // Current estimate of the root
    let f_xk = f(xk); // f(xk)
    let f_x1 = f(x1); // f(x1)
    let f_x0 = f(x0); // f(x0)

    // Start the loop for Secant method
    while (Math.abs(xk - x1) > tol) {
        // Apply the Secant method formula
        xk = x1 - (f_x1 * (x1 - x0)) / (f_x1 - f_x0);
        f_xk = f(xk);

        // Print the current iteration results
        console.log(`Iteration ${k}: xk = ${xk}, f(xk) = ${f_xk}`);

        // Update values for the next iteration
        x0 = x1;
        x1 = xk;
        f_x0 = f_x1;
        f_x1 = f_xk;

        // Increment the iteration counter
        k++;
    }

    // After convergence
    console.log(`The required root is: ${xk}`);
    return xk;
}

// Example usage with initial guesses x1 = 1, x0 = 2
let x1 = 1;
let x0 = 2;
secantMethod(x1, x0);

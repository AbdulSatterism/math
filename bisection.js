// Define the function f(x) - Example function: f(x) = x^3 - x - 2
function f(x) {
    return x ** 3 - x - 2;
}

// Bisection method implementation
function bisectionMethod(a, b, tol = 0.0001) {
    let k = 0; // Iteration counter
    let xk = (a + b) / 2; // Midpoint
    let fxk = f(xk); // f(xk)

    // Print initial values
    console.log(`Iteration ${k}: xk = ${xk}, f(xk) = ${fxk}`);

    // Start the loop until tolerance is met
    while (Math.abs(b - a) / 2 > tol) {
        k++; // Increment the iteration count

        // Check if f(xk) is close enough to zero (convergence check)
        fxk = f(xk);
        if (Math.abs(fxk) < tol) {
            console.log(`The required root is: ${xk}`);
            return xk;
        }

        // Update a or b based on the function value at midpoint
        if (f(a) * fxk < 0) {
            b = xk;
        } else {
            a = xk;
        }

        // Compute the new midpoint
        xk = (a + b) / 2;
        fxk = f(xk);

        // Print the current iteration results
        console.log(`Iteration ${k}: xk = ${xk}, f(xk) = ${fxk}`);
    }

    // After convergence
    console.log(`The required root is: ${xk}`);
    return xk;
}

// Example usage with a = 1, b = 2
let a = 1;
let b = 2;
bisectionMethod(a, b);

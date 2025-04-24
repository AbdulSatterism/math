// Define the function f(x) - Example function: f(x) = x^3 - x - 2
function f(x) {
    return x ** 3 - x - 2;
}

// Define the derivative of f(x) - f'(x) = 3x^2 - 1
function df(x) {
    return 3 * x ** 2 - 1;
}

// Newton-Raphson method implementation
function newtonRaphsonMethod(x0, tol = 0.0001, maxIter = 100) {
    let k = 1; // Iteration counter
    let xk = x0; // Initial guess for the root
    let fxk = f(xk); // f(xk)
    let dfxk = df(xk); // f'(xk)

    // Start the loop for Newton-Raphson method
    while (Math.abs(fxk) > tol && k <= maxIter) {
        // Apply the Newton-Raphson formula
        xk = xk - fxk / dfxk;
        fxk = f(xk);
        dfxk = df(xk);

        // Print the current iteration results
        console.log(`Iteration ${k}: xk = ${xk}, f(xk) = ${fxk}`);

        // Increment the iteration counter
        k++;
    }

    // After convergence or max iterations
    if (Math.abs(fxk) <= tol) {
        console.log(`The required root is: ${xk}`);
    } else {
        console.log("The method did not converge within the maximum iterations.");
    }

    return xk;
}

// Example usage with initial guess x0 = 1.5
let x0 = 1.5;
newtonRaphsonMethod(x0);

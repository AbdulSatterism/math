// Function to compute divided differences
function dividedDifference(x, y) {
    let n = x.length;
    let D = [];

    // Initialize the divided differences table
    for (let i = 0; i < n; i++) {
        D[i] = [];
        D[i][0] = y[i]; // The first column is just y values
    }

    // Compute divided differences for each column
    for (let j = 1; j < n; j++) {
        for (let i = 0; i < n - j; i++) {
            D[i][j] = (D[i + 1][j - 1] - D[i][j - 1]) / (x[i + j] - x[i]);
        }
    }

    return D;
}

// Newton's Forward Interpolation method
function newtonsForwardInterpolation(x, y, xp) {
    let n = x.length;
    let D = dividedDifference(x, y); // Divided differences table

    let h = x[1] - x[0]; // Step size (assuming equal spacing)
    let p = (xp - x[0]) / h; // Calculate p (scaled difference)

    let sum = y[0]; // Start with the first function value f(x0)
    let prod = 1; // Initial product for the terms

    // Calculate the interpolation value using the Newton's forward formula
    for (let i = 1; i < n; i++) {
        prod *= (p - (i - 1)); // Compute the product for the current term
        sum += prod * D[0][i]; // Update sum with the current term
    }

    return sum;
}

// Example data points (x_i, f_i)
let x = [0, 1, 2, 3, 4]; // x values
let y = [1, 2, 4, 8, 16]; // f(x) values

// Interpolation point
let xp = 2.5;

// Compute the interpolated value at xp
let result = newtonsForwardInterpolation(x, y, xp);
console.log(`The interpolated value at x = ${xp} is: ${result}`);

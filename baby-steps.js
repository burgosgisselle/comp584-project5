// Initialize sum to 0
let sum = 0;

    // We start at index 2 because the first element is 'node' and the second element is the path to the script file
    for (let i = 2; i < process.argv.length; i++) {

        // Convert the argument to a number and add it to sum.
        // If we weren't converting to a number, it may concatenate strings.
        sum += Number(process.argv[i]);
    }
    console.log(sum);
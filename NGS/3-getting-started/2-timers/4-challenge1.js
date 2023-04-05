const theOneFunc = msg => {
    console.log(msg);
};

setTimeout(theOneFunc, 4 * 1000, "Hello after 4 seconds");

setTimeout(theOneFunc, 8 * 1000, "Hello after 8 seconds");

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function

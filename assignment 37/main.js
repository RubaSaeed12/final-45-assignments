function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Making a ".concat(size, " T-shirt with the message ").concat(message, " printed on it"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Dive into Coding");

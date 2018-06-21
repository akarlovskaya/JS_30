/*
Your program should prompt a user for their name to obtain their name as a string.

You may assume that the user’s input will contain only letters (uppercase and/or lowercase) plus spaces. You don’t need to worry about names like Joseph Gordon-Levitt, Conan O’Brien, or David J. Malan!

But the user’s input might be sloppy, in which case there might be one or more spaces at the start and/or end of the user’s input or even multiple spaces in a row.

Your program should print the user’s initials (i.e., the first letter of each word in their name) with no spaces or periods, followed by a newline.
*/

function initials() {
    var fullName;
    var names;
    var name;
    var initials = "";

    do {
        fullName = prompt("Enter your full name");
    } while (fullName == "");

    names = fullName.split(" ");
    for (name in names) {
        if (names[name] != "") {
            initials += names[name][0];
        }
    }
    console.log(initials);
}
initials();

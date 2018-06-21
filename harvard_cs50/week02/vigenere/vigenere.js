/*jshint esversion: 6 */

/*
Your program must accept a keyword, composed entirely of alphabetical characters.

Your program must proceed to prompt the user for a string of plaintext, (as by a prompt for plaintext:) which it must then encrypt according to Vigenère’s cipher with keyword, ultimately printing the result (prepended with ciphertext: and ending with a newline)

With respect to the characters in keyword, you must treat A and a as 0, B and b as 1, …​ , and Z and z as 25.

Your program must only apply Vigenère’s cipher to a character in plaintext if that character is a letter. All other characters (numbers, symbols, spaces, punctuation marks, etc.) must be outputted unchanged. Moreover, if your code is about to apply the jth character of keyword to the ith character of plaintext, but the latter proves to be a non-alphabetical character, you must wait to apply that jth character of keyword to the next alphabetical character in plaintext; you must not yet advance to the next character in keyword.

Your program must preserve the case of each letter in plaintext.
*/

function vigenere() {
    let key_word = "";
    let letters = /^[A-Za-z]+$/;
    let plaintext = "";
    let ciphertext = "";
    let plaintext_length;
    let kk;
    let j = 0;
    let key_alphabet_beginning;
    let string_alphabet_beginning;

    // keep asking while it's not letters
    do {
        key_word = prompt("Enter a key word");
    } while (!key_word.match(letters));
    console.log(key_word);

    // ask to enter plaintext
    plaintext = prompt("Enter a plaintext");
    plaintext_length = plaintext.length;

    console.log(plaintext);
    console.log(plaintext_length);

    // iterate through plaintext
    for (let i = 0; i < plaintext_length; i++) {
        // check if char is a letter and do crypto
        if (plaintext[i].match(letters)) {
            // console.log(plaintext[i]);
            kk = key_word[j % ]
        }
        // if not a letter, just print it
        else {
            console.log(plaintext[i]);
        }
    }
}
vigenere();

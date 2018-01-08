/*jshint esversion: 6 */
/* Implement a program that determines whether a provided credit card number is valid according to Luhn’s algorithm.
1. Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products' digits together.
2. Add the sum to the sum of the digits that weren’t multiplied by 2.
3. If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid
Example with AmEx: 378282246310005:
a) multiply each of the underlined digits by 2:
7•2 + 2•2 + 2•2 + 4•2 + 3•2 + 0•2 + 0•2
That gives us:
14 + 4 + 4 + 8 + 6 + 0 + 0
Add those products' digits (i.e., not the products themselves) together:
1 + 4 + 4 + 4 + 8 + 6 + 0 + 0 = 27
b) Add that sum (27) to the sum of the digits that weren’t multiplied by 2:
27 + 3 + 8 + 8 + 2 + 6 + 1 + 0 + 5 = 60
c) If the last digit in that sum (60) is a 0, card is legit

Cards for testing https://developer.paypal.com/docs/classic/payflow/payflow-pro/payflow-pro-testing/#credit-card-numbers-for-testing
*/

// get n'th digit of card number
function getDigit(cardInput, number_of_digit) {
    var x = Math.pow(10, number_of_digit - 1);
    var digit = (Math.floor(cardInput / x)) % 10;
    return digit;
}

// get whole sum
function getSum(cardInput) {
    var sum_of_evens = 0;
    var sum_of_odds = 0;
    var whole_sum = 0;
    var number_toString = cardInput.toString();
    var number_length = number_toString.length;
    var first_two_chars_of_card = number_toString.substring(0, 2);
    var first_one_char_of_card = number_toString.substring(0, 1);

    // get sum of evens
    for (var i = 0; i <= number_length; i += 1) {
        if (i % 2 == 0) {
            var even_digit = 2 * getDigit(cardInput, i);
            if (even_digit >= 10) {
                even_digit = getDigit(even_digit, 1) + getDigit(even_digit, 2);
            }
            sum_of_evens += even_digit;
        }
    }

    // get sum of odds
    for (var j = 1; j <= number_length; j += 2) {
        var odd_digit = getDigit(cardInput, j);
        sum_of_odds += odd_digit;
    }

    whole_sum = sum_of_evens + sum_of_odds;
    // console.log(whole_sum);

    // check type of card
    if (getDigit(whole_sum, 1) == 0) {
        var card;

        if (first_one_char_of_card == '4') {
            card = 'Visa';
        }

        switch (first_two_chars_of_card) {
            case '34':
                card = "American Express";
                break;
            case '37':
                card = "American Express";
                break;
            case '51':
                card = "MasterCard";
                break;
            case '52':
                card = "MasterCard";
                break;
            case '53':
                card = "MasterCard";
                break;
            case '54':
                card = "MasterCard";
                break;
            case '55':
                card = "MasterCard";
                break;
            default:
                card = "N/a";
        }
        console.log(whole_sum);
        console.log(card + ' is legit');

    } else {
        console.log(whole_sum);
        console.log('Card is not legit');
    }

}
getSum(378282246310005);

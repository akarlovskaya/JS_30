/*jshint esversion: 6 */
// Implement a program that determines whether a provided credit card number is valid according to Luhn’s algorithm.

function checksum(card_input) {
  //1. step: multiply each other digit by 2:
  var multiplyed_by_two = [];
  var not_multiplyed_by_two = [];
  var sum_of_multiplyed_by_two = 0;
  var chars_sum = 0;

  for ( var i = 0; i < card_input.length; i++ ) {
    if ( card_input.indexOf(card_input[i]) % 2  ) {
      multiplyed_by_two.push(card_input[i] * 2);
      // console.log(card_input[i]);
    } else {
      not_multiplyed_by_two.push(card_input[i]);
      // console.log(card_input[i]);
    }
  }
  console.log(multiplyed_by_two);
  console.log(not_multiplyed_by_two);

  // // 1.1 step: add those products' digits (i.e., not the products themselves) together:
  for (var k = 0; k < multiplyed_by_two.length; k++ ) {
      if ( multiplyed_by_two[k] > 10 ) {
        var num_to_string = multiplyed_by_two[k].toString();
        // add char to each other
        for ( j = 0; j < num_to_string.length; j++ ) {
          var make_it_num = parseInt(num_to_string[j], 10);
          chars_sum += make_it_num;
        }
      }
      sum_of_multiplyed_by_two += multiplyed_by_two[k];
    }
      //this is whole sum:
      sum_of_multiplyed_by_two = chars_sum + sum_of_multiplyed_by_two;
      // console.log(sum_of_multiplyed_by_two);

    // 2. add that whole sum to the sum of the digits that weren’t multiplied by 2:


}

checksum(378282246310005);

// function check_credit_card() {
//   var card_number = prompt("Enter credit card number:");
//
//   checksum(card_number);
//
// }

//check_credit_card();

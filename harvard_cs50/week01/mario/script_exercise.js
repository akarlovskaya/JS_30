/*jshint esversion: 6 */
/* Implement a program that prints out a half-pyramid of a specified height, per the below.
Height: 5
    ##
   ###
  ####
 #####
######

Height: 3
  ##
 ###
####
*/

function mario01() {
    var height;

    do {
        height = prompt("Enter non-negative integer no greater than 23");
    } while (height <= 0);

    if (height < 23) {

        for (var i = 2; i <= height; i++) {
            var hash = '';
            var html = '';

            for (var j = 0; j <= height - i; j++) {
                hash += '&ensp;';
            }

            for (var k = 1; k <= i; k++) {
                hash += '#';
            }
            document.getElementById('pyramid').innerHTML += hash + '</br>';

        }
    } else {
        document.getElementById('error_msg').innerHTML = 'Enter integer no greater than 23';
    }
}

mario01();

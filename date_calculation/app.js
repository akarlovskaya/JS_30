/*jshint esversion: 6 */
let formEl = document.getElementById("input-form");
let paragraphEl = document.getElementById('result');
let todayDate = new Date();

// Event Listener
formEl.addEventListener('submit', calculateDateDiff);

function calculateDateDiff(e){
    let inputValue = document.getElementById('dateInput').value;
    // formate input value to pass it correctly into a new Object
    let formatedInputArr = inputValue.split('-');
    // get year, month and day separetly
    let yearNumValue = Number(formatedInputArr[0]);
    let monthNumValue = Number(formatedInputArr[1]) - 1;
    let dayNumValue = Number(formatedInputArr[2]);
    // create new object for Due to Date
    let dueDate = new Date(yearNumValue, monthNumValue, dayNumValue);

    let years = yearsDiff(todayDate, dueDate);
    let months = monthsDiff(todayDate, dueDate);
    let days = daysDiff(todayDate, dueDate);
    let hours = hoursDiff(todayDate, dueDate);

    paragraphEl.textContent =  createPhrase(years, months, days, hours);

    e.preventDefault();
}

// Calculate years difference
let yearsDiff = function(d1, d2){
    if ( d2.getFullYear() >= d1.getFullYear() ) {
        return d2.getFullYear() - d1.getFullYear();
    } else {
        console.warn('Due to year is less than current year');
    }
};
// Calculate months difference
let monthsDiff = function(d1, d2){
    return Math.abs(d2.getMonth() - d1.getMonth() + (12 * (d2.getFullYear() - d1.getFullYear())));
};
// Calculate days difference
let daysDiff = function(d1, d2){
    let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    let days = Math.round(Math.abs((d1.getTime() - d2.getTime())/(oneDay)));
    return days;
};
// Calculate hours difference
let hoursDiff = function(d1, d2){
    // 36e5 is the scientific notation for 60*60*1000 (converts the milliseconds difference into hours)
    let hours = Math.round(Math.abs(d2 - d1) / 3.6e6);
    return hours;
};

// create and display phrase
let createPhrase = function(yearsNum, monthsNum, daysNum, hoursNum) {
    let phraseOutput = '';
    // years
    if ( yearsNum == 1 ) {
        phraseOutput += yearsNum + ' year ';
    } else if ( yearsNum > 1 ) {
        phraseOutput += yearsNum + ' years ';
    }
    // months
    if ( monthsNum == 1 ) {
        phraseOutput += monthsNum + ' month ';
    } else if ( monthsNum > 1 ) {
        phraseOutput += monthsNum + ' months ';
    }
    // days
    if ( daysNum == 1 ) {
        phraseOutput += daysNum + ' day ';
    } else if ( daysNum > 1 ) {
        phraseOutput += daysNum + ' days ';
    }
    // hours
    if ( hoursNum == 1 ) {
        phraseOutput += hoursNum + ' hour ';
    } else if ( hoursNum > 1 ) {
        phraseOutput += hoursNum + ' hours ';
    }

    // show the phrase
    if ( phraseOutput ) {
        return phraseOutput += 'left till the given date';
    }
};

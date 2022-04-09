//Current Date and time Jan 1st, 2022
var currentDateTime= moment().format("MMM Do, YYYY hh:mm:ss");

//today of year
var todayOfYear=moment().dayOfYear();

//in Jquery
// Use Moment.js to format the following variables:
// 1. What is today's date in the following format: Jan 1st, 1999?
var today = moment();
$("#1a").text(today.format("MMM Do, YYYY"));


// 2. What is the day of the week today?
var dayWeek = today.format("[Today is] dddd")
$("#2a").text(dayWeek);

// 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.
var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
$("#3a").text(reformatDate);

// 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
var weekNum = today.format("w");
var takeOut;
// Check odd, then assign boolean
if(weekNum % 2) {
  takeOut = true;
} else {
  takeOut = false;
}

$("#4a").text(takeOut + ", because it's currently week " + weekNum);

/ TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment("2021-06-15").format("MMM Do, YYYY");
$("#1a").text(gradDate);

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment("1-1-2022", "M-D-YYYY").format("ddd MMM Do, YYYY");
$("#2a").text(weekDay);

// TODO: 3. Out of 365, what day of the year is today?
var dayYear = moment().format("DDD");
$("#3a").text(dayYear);

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment().format("hh:mm:ss");
$("#4a").text(time);

// TODO: 5. What is the current Unix timestamp?
var unix = moment().format("X");
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment.unix(1318781876).format("MMM Do, YYYY, hh:mm:ss");
$("#6a").text(unixFormat);


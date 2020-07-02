// Current Day and Time
var date = moment().format("MMM Do YY");

$("#currentDay").append(date);


console.log(date);

// Time of day color change 

var timeOfday = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function updatetime() {
    var currentTime = moment().format('H');
    for(var i = 0; i < timeOfday.length; i++) {
  
      if (parseInt(timeOfday[i]) > currentTime) {
        $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");
  
  
      }
      else if (parseInt(timeOfday[i]) < currentTime) {
        $("#" + timeOfday[i]).attr("style", "background-color: lightgray");
  
      }
      else if (parseInt(timeOfday[i]) == currentTime) {
        $("#" + timeOfday[i]).attr("style", "background-color: #fc665e");
      
      }
    }
  }
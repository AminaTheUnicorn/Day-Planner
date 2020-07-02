// Current Day and Time
var date = moment().format("MMM Do YY");

$("#currentDay").append(date);


console.log(date);

// Time of day color change 

var timeofDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

function updatetime() {
  var currentTime = moment().format('H');
  console.log( "currentTime:" + currentTime);
    for(var i = 0; i < timeofDay.length; i++) {
      
      if (parseInt(timeofDay[i]) > currentTime) {
        $("#" + timeofDay[i]).attr("style", "background-color: #58ce7b");
        
        
      }
      else if (parseInt(timeofDay[i]) < currentTime) {
        $("#" + timeofDay[i]).attr("style", "background-color: #ff9aa2");
        
      }
      else if (parseInt(timeofDay[i]) == currentTime) {
        $("#" + timeofDay[i]).attr("style", "background-color: #f1f8ff");
        
      }
    }
  }
  updatetime();

let input = [];
const addInput = () => {
    preventDefault();
    let input = {
        content: document.getElementsByClassName("form-control").value
    }
}

  document.getElementById("btn").addEventListener("click", function(){
    var input = $("input");
  });

//   $("#bttn").on("click", function() {
//       var timeslot = $(this).attr("id");
//       var content = $("input").val().trim();

//       localStorage.setItem(timeslot,content);
//       console.log(timeslot,content);
//     }
//     )
//     document.getElementById('email').setAttribute('value', localStorage.getItem('email'));

//     $("#9am")("input").val(localStorage.getItem("9am"));
//     $("#10am")("input").val(localStorage.getItem("10am"));
//     $("#11am")("input").val(localStorage.getItem("11am"));
//     $("#12pm")("input").val(localStorage.getItem("12pm"));
//     $("#1pm")("input").val(localStorage.getItem("1pm"));
//     $("#2pm")("input").val(localStorage.getItem("2pm"));
//     $("#3pm")("input").val(localStorage.getItem("3pm"));
//     $("#4pm")("input").val(localStorage.getItem("4pm"));
//     $("#5pm")("input").val(localStorage.getItem("5pm"));
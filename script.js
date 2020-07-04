// Current Day and Time
$(document).ready(function () {
  var date = moment().format("");

  $("#currentDay").append(date);


  console.log(date);

  // Time of day color change 

  var timeofDay = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

  function updatetime() {
    var currentTime = moment().format('H');
    console.log("currentTime:" + currentTime);
    for (var i = 0; i < timeofDay.length; i++) {

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

  //   function getInputValue(){
  //     // Selecting the input element and get its value 
  //     var inputVal = document.getElementsByClassName("time").value;

  //     // Displaying the value
  //     console.log(inputVal);
  // }

  // getInputValue();


  $(".btn").on("click", function () {
    var userInput = $(this).parent().parent().children(":nth-child(2)").val();
    var timeSlot = $(this).parent().parent().children(":nth-child(1)").children(":nth-child(1)").text();
    console.log(timeSlot)
    console.log(userInput);

    localStorage.setItem(timeSlot, userInput);



  }
  );


  
$("#9").val(localStorage.getItem("9 A.M."));
$("#10").val(localStorage.getItem("10 A.M."));


  //  var savData = document.querySelectorAll(value(".btn")).length;

  //  console.log(savData);

  //  for (var i =0; i < savData; i++){
  //    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
  //     event.preventDefault()
  //     var input = document.querySelectorAll(valueOf(".time"));
  //     localStorage.setItem("time", input);


  //   })
  // }

});
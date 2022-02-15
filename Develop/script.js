$(".btn").on("click", function () {
    var timeSlotActivity = $(this).siblings(".form-control").val();
    console.log(timeSlotActivity);
    var timeSlotId = $(this).parent().attr("id");
  
    localStorage.setItem(timeSlotId, timeSlotActivity);
  });
  
  //Saves input text to local storage - when page refreshes, text is still saved
  function saveText() {
    var inputText = document.querySelector("#textarea");
    var output = document.querySelector("#textarea");
    var saveButton = document.querySelector("#saveBtn");
  
    saveButton.addEventListener("click", updateOutput);
  
    output.textContent = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", inputText.value);
  
      output.textContent = localStorage.getItem("content");
    }
  }

  //set current day and time at top of screen
var currentDate = moment().format("dddd MMM Do YYYY, h:mm a ");
$("#currentDay").append(currentDate)

// function for changing colour according to past, present and future
function currentTime() {
    var currentHour = moment().hours();
  
    $(".input-group").each(function () {
  
      var plannerTime = parseInt($(this).attr("id"));
  
      if (plannerTime < currentHour) {
        $(this).addClass("past");
      } else if (plannerTime === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }
  
  var timeCheckInterval = setInterval(currentTime, 20000);
  
  currentTime();
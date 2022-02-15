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
var displayDate = function() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

displayDate();

var saveTasks = function() {
    localStorage.setItem("task", JSON.stringify(task));
}





var timeArr = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];



saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
}





var currentTime = moment().hour();

$(".time-block").each(function() {
    var timeBlock = $(this).attr("class");

    if (timeBlock < currentTime) {
        $(this).addClass("past");
        }
    else if (timeBlock > currentTime) {
        $(this).addClass("future");
    }
    else {
         $(this).addClass("present");
    }
})
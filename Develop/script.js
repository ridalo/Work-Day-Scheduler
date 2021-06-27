var task = [];

///display current day
var currentDate = moment().format("dddd, h:mm A");

$("#currentDay").append(currentDate);

//display on time of day
var rightNow = moment().hour();

$("textarea").each(function (index, element) {
    if ($(element).attr("id") < rightNow) {
      $(element).removeClass("future");
      $(element).removeClass("present");
      $(element).addClass("past");
    } else if ($(element).attr("id") > rightNow) {
      $(element).addClass("future");
      $(element).removeClass("present");
      $(element).removeClass("past");
    }
  });
  

// save to local storage
$(".saveBtn").click(function () {
    console.log($(this).parent().siblings("div").children()[0]);
    var textValEl = $(this).parent().siblings("div").children()[0];
    console.log($(textValEl).attr("id"));
    TextTrackList.push({
        id: $(textValEl).attr("id"),
        value: $(textValEl).val(),
    });
    console.log(task);
    localStorage.setItem("taskInfo", JSON.stringify(task));
});

//load localstorage data
var loadTask = function () {
    task = JSON.parse(localStorage.getItem("taskInfo")) || [];

    $("textarea").each(function (index, element) {
        for (var i = 0; i < task.length; i++) {
            if ($(element).attr("id") === task[i].id) {
                $(element).val(task[i].value);
            }
        }
    });
};
loadTask();


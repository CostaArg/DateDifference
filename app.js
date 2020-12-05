$(document).ready(function () {
  $("#date").change(function () {
    $("#first-date-text").text("First Date Selected: ");
    $("#first-date-value").text($(this).val());
  });

  $("#date2").change(function () {
    $("#second-date-text").text("Second Date Selected: ");
    $("#second-date-value").text($(this).val());
  });

  $("#button").click(function () {
    let firstDate = $("#first-date-value").text();
    let secondDate = $("#second-date-value").text();

    let firstDateSec = Date.parse(firstDate);
    let secondDateSec = Date.parse(secondDate);

    let differenceSec = secondDateSec - firstDateSec;

    let days = differenceSec / (1000 * 3600 * 24);

    if (days < 0) {
      days = days * -1;
    }

    alert(days + " days");
  });
});

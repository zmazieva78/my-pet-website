$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("background-light");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("background-dark");
  });

});

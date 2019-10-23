$(document).ready(function() {
  $("button#pink").click(function() {
    $("body").removeClass();
    $("body").addClass("background-pink");
  });

  $("button#cream").click(function() {
    $("body").removeClass();
    $("body").addClass("background-cream");
  });

  $("button#picture").click(function() {
    $("body").removeClass();
    $("body").addClass("background-picture");
  });
});

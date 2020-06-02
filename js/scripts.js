$(document).ready(function() {
  $("#light").click(function() {
    $("body").removeClass("dark-background")
    $("body").addClass("light-background")
  }); 
  $("#dark").click(function() {
    $("body").removeClass("light-background")
    $("body").addClass("dark-background")
  });
});
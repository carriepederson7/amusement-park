$(document).ready(function() {
  $("#enterHeight").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("input#height").val());
    console.log(height);
    if (height > 34 && height < 54) {
      $("#short").show();
      $("h3").show();
      $("#all").show();

    } else if (height >= 54 && height < 90) {
      $("#extreme").show();
      $("h3").show();
      $("#all").show();

    } else {
      alert("That height is not valid; try again.");
    }


  });
});

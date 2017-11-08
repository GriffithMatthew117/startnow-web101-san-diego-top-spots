$(document).ready(function() {


$.getJSON("data.json", function(results) {
    $.each(results, function(index, result) {
      $("#spots").append("<tr><td>" + result.name + "</td><td>"
        + result.description + "</td><td><a href='https://www.google.com/maps"
        + result.location + "'> View on Google Maps</a></td></tr>");

    });

  });
  
});
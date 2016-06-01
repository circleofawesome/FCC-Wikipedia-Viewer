$(document).ready(function() {

  $("#searchForm").submit(function() {
    event.preventDefault();
  });

  $("#searchButton").on('click', function() {
    //main code goes here, functions and stuff
    var x = document.getElementById("searchInput").value;
    console.log(x);
  });

  $('#searchInput').keypress(function(e) {
    if (e.keyCode == 13)
      $('#searchButton').click();
  });

});
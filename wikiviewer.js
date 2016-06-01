$(document).ready(function() {

  $("#searchForm").submit(function() {
    event.preventDefault();
  });

  $("#searchButton").on('click', function() {
    //main code goes here, functions and stuff
    var searchString = document.getElementById("searchInput").value;
    //console.log(searchString);
    searchResults(searchString);
  });

  $('#searchInput').keypress(function(e) {
    if (e.keyCode == 13)
      $('#searchButton').click();
  });

  //$(".right").append("<p class='top-buffer'>HELLO WORLD</p>");  ***THIS HERE WORKS
  //***NOW MAKE A FUNCTION THAT FIRST MAKES AN AJAX CALL USING THE STRING OBTAINED IN THE BUTTON CLICK USER INPUT
  //***THEN UPDATE THE HTML/CSS OF THE RIGHT SIDE OF THE PAGE WITH THE RESULTS OBTAINED FROM THE AJAX CALL
  //***THEN PUT THAT FUNCTION INTO THE BUTTON CLICK FUNCTION

});

function searchResults(searchString){
  $.ajax({
    type:'GET',
    dataType:'JSON',
    url:'https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search='+searchString+'&callback=?',
    success:function(data){
      //console.log(data[0]);  this works
      $(".right").append("<h1>"+data[0]+"</h1>");
      $(".right").append("<h1>"+data[2][0]+"</h1>");
    }
  });
}
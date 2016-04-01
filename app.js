$(function(){

var count = 0;

$("#generate").on('click', function(){
    $(this).text("Generate! " + count);
    $("#delete").append("<button id =\"delete\">Delete</button>");
    $("#change").append("<button id =\"change\">Change</button>")

    count++;
});

$("#delete").first().on('click', function(){
  console.log('this is working');
  $(".theButtons").empty();
});

$("#change").on('click', function(){
  console.log('this is working');
  $(".theButtons").toggleClass("theChange");
});















});

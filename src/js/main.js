$(function(){
  var $readMoreLink = $(".read-more");

  $readMoreLink.on("click", function(e){
    e.preventDefault();
    $(this).parent().next("div").show();
    $(this).remove();
  });
});

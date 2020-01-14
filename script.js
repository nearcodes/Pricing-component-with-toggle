$(document).ready(function(){
  $(".check").click(function(){
     if ($(this).is(":checked")) {
       $(".deal-price.year").addClass("active");
       $(".deal-price.month").removeClass("active");
     } else {
       $(".deal-price.year").removeClass("active");
       $(".deal-price.month").addClass("active");
     }
  });
});
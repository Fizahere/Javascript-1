// console.log(jQuery, "jQuery");
// console.log($, "$");

$(document).ready(function () {
  // $("p").click(function () {
  //   $(this).hide();
  //   //this = current element
  // });

  $("#hide").click(function () {
    // $("p").hide();
    // $("p").fadeOut();
    // $("p").slideUp();
    $("p").slideToggle();
    // $(this).parent().parent().parent()
  });
  $("#show").click(function () {
    // $("p").show();
    // $("p").fadeIn();
    // $("p").slideDown();
    $("p").slideToggle();
  });
});

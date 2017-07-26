$(document).ready( function() {
  console.log('found js');
  $("img").click(
    function() {
      console.dir(this);
      var tempName = $(this).attr("src");
      console.log("tempName == " + tempName);
      $(this).attr("src", $(this).attr("data-alt-src") );
      $(this).attr("data-alt-src", tempName);
    }
  );
}
);

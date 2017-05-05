// Compile the template
var source = $("#entry-template").html();
var template = Handlebars.compile(source);

$.getJSON( "data/em.json", function( data ) {
  // Execute the template
  var context = {
    "monarchs": data
  };
  console.log(context);
  var html = template(context);
  $("#content").html(html);
});

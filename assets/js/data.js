var data_links = "/links.json";
var data_apps = "/apps.json";
var data_providers = "/providers.json";
var data_autocomplete = "/autocomplete.json";

$(document).ready(function(){
  $.getJSON(data_links,
    function (data) {
      var mysource = $('#links-template').html();
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      $('#links').html(myresult);
  });
});
  
$(document).ready(function(){
  $.getJSON(data_apps,
    function (data) {
      var mysource = $('#apps-template').html();
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      $('#apps').html(myresult);
  });
});
  
$(document).ready(function(){
  $.getJSON(data_providers,
    function (data) {
      var mysource = $('#providers-template').html();
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      $('#providers').html(myresult);
  });
});

$(document).ready(function(){
  $.getJSON(data_autocomplete,
    function (data) {
      var mysource = $('#autotemp').html();
      var mytemplate = Handlebars.compile(mysource);
      var myresult = mytemplate(data)
      $('#autoresults').html(myresult);
  });
});
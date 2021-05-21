$( document ).ready(() => {
    $(".envelope-wrapper .heart").click(() => {
      $('.envelope-wrapper').addClass('flap')
  });

  $(".envelope-wrapper .close-icon").click(() => {
      $('.envelope-wrapper').removeClass('flap')
  });
});




$(document).ready(function()
{ 
	
	$("#search-btn").on("keyup", function() {
    var textVal = $(this).val().toLowerCase();
		$(" .content-allnews .title-news").each(function() {
        var textInsert = $(this).text().toLowerCase();
        $(this).closest('.content-allnews')
		[ textInsert.indexOf(textVal) !== -1 ? 'show' : 'hide' ]();
    });
    
    
    
});
  

});


$(document).ready(function()
{ 
	
	$("#search-btn2").on("keyup", function() {
    var textVal = $(this).val().toLowerCase();
		$(" .content-allnews .category").each(function() {
        var textInsert = $(this).text().toLowerCase();
        $(this).closest('.content-allnews')
		[ textInsert.indexOf(textVal) !== -1 ? 'show' : 'hide' ]();
    });
    
    
    
});
  

});



$(document).ready(function()
{ 
	
	$("#search-btn3").on("keyup", function() {
    var textVal = $(this).val().toLowerCase();
		$(" .content-allnews .sallary").each(function() {
        var textInsert = $(this).text().toLowerCase();
        $(this).closest('.content-allnews')
		[ textInsert.indexOf(textVal) !== -1 ? 'show' : 'hide' ]();
    });
    
    
    
});
  

});

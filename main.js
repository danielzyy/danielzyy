$(document).ready(() => {
	$('.jumbotron .row h1').fadeIn(500);
	$('.jumbotron .row h3').fadeIn(600);
	$('.profile .row img').fadeIn(700);
	$('.profile .row .text').fadeIn(700);

	//nav-button

	function goToByScroll(id){
	          // Remove "link" from the ID
	        id = id.replace("link", "");
	          // Scroll
	        $('html,body').animate({
	            scrollTop: $("#"+id).offset().top},
	            'slow');
	    }
    $('.bar a').click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll($(this).attr("id"));           
    });
    $('.sidenav a').click(function(e) { 
          // Prevent a page reload when a link is pressed
        e.preventDefault(); 
          // Call the scroll function
        goToByScroll($(this).attr("id"));           
    });
});
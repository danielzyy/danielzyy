$(document).ready(() => {
	$('.jumbotron .row h1').fadeIn(500);
	$('.jumbotron .row h3').fadeIn(600);
	$('.gallery .gallery-item .thumbnail').on('mouseenter', event => {
		$(event.currentTarget).animate({
			opacity:1
		},350);
	});
	$('.gallery .thumbnail').on('mouseleave', event => {
		$(event.currentTarget).animate({
			opacity:0.8
		},350);
	});
	$('.gallery #academics').on('click', () => {
		$('#academics').fadeOut(500);
		$('.academicsinfo').slideDown(500); 
	});
	$('.gallery #sports').on('click', () => {
		$('#sports').fadeOut(500);
		$('.sportsinfo').slideDown(500); 
	});
	$('.gallery #extracurriculars').on('click', () => {
		$('#extracurriculars').fadeOut(500);
		$('.extrainfo').slideDown(500); 
	});
	$('.academicsinfo .closebutton').on('click', () => {
		$('.academicsinfo').slideUp(500); 
		$('#academics').fadeIn(500);	
	});
	$('.sportsinfo .closebutton').on('click', () => {
		$('.sportsinfo').slideUp(500); 
		$('#sports').fadeIn(500);	
	});
	$('.extrainfo .closebutton').on('click', () => {
		$('.extrainfo').slideUp(500); 
		$('#extracurriculars').fadeIn(500);	
	});
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
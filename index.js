(function() {
	function adjust_body_offset() {
    	$('#content').css('padding-top', $('#navbar').outerHeight(true) + 'px' );
    	$('#partners_right').css('top', ($('#navbar').outerHeight(true) - 20) + 'px' );
	}

	$(window).resize(adjust_body_offset);
	$(document).ready(adjust_body_offset);

	$("#header").load("/banniere/banniere.html", function() {
		$('#banniere').imagesLoaded(adjust_body_offset);
	});
	$("#partners_right").load("/partenaires/partenaires_droite.html", adjust_body_offset);
	$("#partners_bottom").load("/partenaires/partenaires_bas.html", adjust_body_offset);
})()
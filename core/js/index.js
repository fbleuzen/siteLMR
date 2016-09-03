(function() {
	function adjust_body_offset() {
    	$('#content').css('padding-top', $('#navbar').outerHeight(true) + 'px' );
    	$('#partners_right').css('top', ($('#navbar').outerHeight(true) - 20) + 'px' );
	}

	$(window).resize(adjust_body_offset);
	$(document).ready(adjust_body_offset);

	$("#header").load("/saison16_17/banniere/banniere.html", function() {
		$('#banniere').imagesLoaded(adjust_body_offset);
	});
	$("#partners_right").load("/saison16_17/partenaires/partenaires_droite.html", adjust_body_offset);
	$("#partners_bottom").load("/saison16_17/partenaires/partenaires_bas.html", adjust_body_offset);
})()


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-83651044-1', 'auto');
  ga('send', 'pageview');
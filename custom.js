$(document).ready(function () {
	console.trace = null;
	console.clear();

	const linkFacebook = "https://www.facebook.com/onerdalpha/";
	const linkInstagram = "https://www.instagram.com/oNerdAlphaReal/";
	const linkLinkedin = "https://www.linkedin.com/company/nerdalpha/";
	const linkTwitter = "https://twitter.com/onerdalpha";

	$(".fa-facebook-f").parent().attr("href", linkFacebook);
	$(".fa-linkedin-in").parent().attr("href", linkLinkedin);
	$(".fab fa-twitter").parent().attr("href", linkTwitter);
	$(".fa-instagram").parent().attr("href", linkInstagram);

});


/** 
 *   <div id="ajaxContent"></div>
  <script>
  var Webflow = Webflow || [];
  Webflow.push(function() {
	$.get('https://cdn.rawgit.com/alvarotrigo/fullPage.js/master/examples/simple.html', function(data) {
	  $('#ajaxContent').append(data);
	});
  });
  </script>


  Change URL from raw.github.com or raw.githubusercontent.com to cdn.rawgit.com

 */
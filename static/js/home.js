$(document).ready(function() {

	if ($(window).scrollTop() > 0) {
		$(".navbar").removeClass("unscrolled");
	}

	$(window).scroll(function() {
		$(".navbar").removeClass("unscrolled");
		if ($(window).scrollTop() <= 0) {
			$(".navbar").addClass("unscrolled");
		}
	})

	$(".navbar-toggle").click(function() {
		if ($(window).scrollTop() <= 0) {
			$(window).scrollTop(1);
		}
	});
});
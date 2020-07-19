$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	loop: false,
  });
});


if($(window).width() < 721){
	$(".owl-carousel").owlCarousel({
		items:1,
		loop: true,
	});
}


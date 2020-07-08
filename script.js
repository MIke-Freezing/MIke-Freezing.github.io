$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:3,
  	loop: false,
  });
});


if($(window).width() < 421){
	$(".owl-carousel").owlCarousel({
		items:1,
		loop: true,
	});
}


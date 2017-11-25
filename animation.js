$(document).ready(function () {

	$('.boxes').click (function () {
		var animations = [ 'animation1', 'animation2', 'animation3' ];
		var boxes = this;
		var animation = animations[Math.floor(Math.random() * 3)];

		$(boxes).addClass(animation);})
    

}); 

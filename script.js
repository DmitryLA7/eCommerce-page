$(document).ready(function(){
	$('.menu__burger').click(function(event){
		$('.menu__burger,.header__items_body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

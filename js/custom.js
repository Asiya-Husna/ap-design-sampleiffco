$(document).ready(function(){
	$('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$("#myNavbar ul").toggleClass('active');
	});
});
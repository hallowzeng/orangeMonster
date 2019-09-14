$(document).ready(function(){
	$('#navbar ul li').click(function(){
		$('li.newactive').removeClass('newactive');
		$(this).addClass('newactive');
	})
})

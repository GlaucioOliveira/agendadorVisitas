/* Função para controlar o #back-to-top*/
//Define a Raiz da API para ser consumida.
var apiURL = function () {
	return "https://localhost:44300/"; //"https://localhost:44300/";
};

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});
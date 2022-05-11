
/*scroll-top more*/
$(function(){
	$('#team a').click(function(){
		var href = $this.attr('href');
		var offSetTop = $href.offset().top;

		$('html,body').animate({'scrollTop':offSetTop});

		return false;
	})
})

/*letreiro*/

function typeWrite(elemento) {
		const textoArray = elemento.innerHTML.split('');
		elemento.innerHTML = '';
		textoArray.forEach((letra, i) => {
			setTimeout(function(){
				elemento.innerHTML += letra;
			}, 300 * i);
		});
	}

	const utprimers = document.querySelector('.frase h2')
	typeWrite(utprimers)


/*Navegação sem atualizar*/

$(function(){

	verificarCliqueMenu();

	function verificarCliqueMenu(){
		$('a').click(function(){
			var href = $(this).attr('href');
			$.ajax({
				'timeout': 10000,
				'url':href,
				'error':function(){
					console.log("Ocorreu um erro!");
				},
				'success':function(data){
					$('#paginas').html(data);
					console.log("não atualizou")
				}
			})
			return false;
		})
	}
});


/*$(function(){
	$('#item-menu').click(function(e){
		$('#item-menu').removeClass('active')
		$(this).addClass('active')
	})
})*/



$('#item-menu').click(function (e)
{
    $('#item-menu').removeClass('active');
    $(this).addClass('active');
});
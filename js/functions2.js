//alert("sim")


//menu mobile
$(".mobile").hide();
$(".fa-xmark").hide();
$(".fa-bars").click(function(){
    $(".mobile").fadeIn();
    $(".fa-xmark").fadeIn();
    $(".fa-bars").hide()
})
$(".fa-xmark").click(function(){
    $(".mobile").hide();
    $(".fa-bars").fadeIn(500)
    $(".fa-xmark").hide();
})

/*letreiro*/

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra;
        }, 200 * i);
    });
}

const utprimers = document.querySelector('.frase h2')
typeWrite(utprimers)


/*Navegação sem atualizar*/

/*$(function(){

    verificarCliqueMenu();

    function verificarCliqueMenu(){
        $('nav a').click(function(){
            var href = $(this).attr('href');
            $.ajax({
                'timeout': 10000,
                'url':href,
                'error':function(){
                    console.log("Ocorreu um erro!");
                },
                'success':function(data){
                    $('#paginas').html(data);
                }
            })
            return false;
        })
    }
});

*/
/*$(function(){
    $('#item-menu').click(function(e){
        $('#item-menu').removeClass('active')
        $(this).addClass('active')
    })
})*/



/*$('nav a').click(function (e){
    $('nav a').removeClass('active');
    $(this).addClass('active');
});
*/
/*scroll-top more*/

$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);

    return false;
});


//BACK-TO-TOP-BUTTON



// Set a variable for our button element.
const scrollToTopButton = document.getElementById('js-top');

// Let's set up a function that shows our scroll-to-top button if we scroll beyond the height of the initial window.
const scrollFunc = () => {
    // Get the current scroll value
    let y = window.scrollY;

};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
    // Let's set a variable for the number of pixels we are from the top of the document.
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
    // We'll also animate that scroll with requestAnimationFrame:
    // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        // ScrollTo takes an x and a y coordinate.
        // Increase the '10' value to get a smoother/slower scroll!
        window.scrollTo(0, c - c / 10);
    }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
    e.preventDefault();
    scrollToTop();
}


//Slides diretorias***************

$(".container").hide();
$(".um").fadeIn();
$(".hp").click(function() {
    $(".container").hide(500);
    $(".um").fadeIn();
});
$(".r").click(function() {
    //Sem parâmetros: o efeito é executado em 400ms
    $(".container").hide(500);
    $(".dois").fadeIn();
});
$(".c").click(function() {
    //Sem parâmetros: o efeito é executado em 400ms
    $(".container").hide(500);
    $(".tres").fadeIn();
});
$(".hr").click(function() {
    //Sem parâmetros: o efeito é executado em 400ms
    $(".container").hide(500);
    $(".quatro").fadeIn();
});


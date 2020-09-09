
jQuery(document).ready(function(){
    let enlace = jQuery('.hambur').attr('href');
    jQuery('.hambur').click(function(e){
        e.preventDefault();
        abrirMenu();
    });

    jQuery('header .container nav a').click(function(){
        let enlace = jQuery(this).attr('href');
        abrirMenu();
        jQuery('html, body').animate({
            'scrollTop' : jQuery(enlace).position().top
        },500);
    })


    // jQuery('.hambur').attr('href', 'http://hola.com');
    // jQuery('.hambur').addClass('open');
    // jQuery('.hambur').removeClass('hambur');

    // if(jQuery('.hambur').hasClass('open') == true){
    //     console.log('hola');
    // } else {
    //     console.log('adios')
    // }
});

function abrirMenu() {
    jQuery('header').toggleClass('open');
    jQuery('header .container .hambur i').toggleClass('fa-times');
    jQuery('header .container nav').toggleClass('open');
}
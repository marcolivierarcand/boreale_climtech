$( document ).ready(function() {
    // console.log( "ready!" );
    placeholderCF7();
    nav_scroll();
    slickcarousel();
    // BOOTRAP collapse;
    $('.collapse').collapse();
});

// Check distance to top and display back-to-top.
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 400 ) {
		$( '.back-to-top' ).addClass( 'show-back-to-top' );
	} else {
		$( '.back-to-top' ).removeClass( 'show-back-to-top' );
	}
});
// Click event to scroll to top.
$( '.back-to-top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 800 );
	return false;
});

// Pour le bouton soumission
// Nav scroll to ID
function nav_scroll(){
	$('.nav-target').on('click',function(e) {
		e.preventDefault();
		var offset = 100;
		var target = this.hash;
		if ($(this).data('offset') != undefined) offset = $(this).data('offset');
		$('html, body').stop().animate({
			'scrollTop': $(target).offset().top - offset
		}, 500, 'swing', function() {
			// window.location.hash = target;
		});
	});
}





function placeholderCF7(){

  $(".wpcf7-free-text").attr("placeholder", "Précisez");
  $("form").attr("autocomplete", "user-password");

  $( document ).on( 'focus', ':input', function(){
    $( this ).attr( 'autocomplete', 'user-password' );
  });

  // script needed for custom checkbox - CUSTOM FORM 7
  $( ".wpcf7-checkbox input[type='checkbox']" ).addClass( "styled-checkbox" );
};


function slickcarousel(){
  console.log('slick');
  $('.slick-carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false

  });
};

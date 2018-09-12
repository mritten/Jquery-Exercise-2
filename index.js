$('.navicon').on('click', function(){
    $('.mainNavDropDown').slideToggle(100);
   });

$("#numbers").hide();

$( "#alpha" ).click(function() {
    $( "#letters" ).show( 'fast' );
    $("#numbers").hide('fast');
  });

  $( "#num" ).click(function() {
    $( "#numbers" ).show( 'fast' );
    $("#letters").hide('fast')
  }); 
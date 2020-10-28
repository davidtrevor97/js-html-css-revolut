//set variabili
vanish = $(".dis-none") ;
clicked = $(".clicked");
//codice
clicked.click( function(){
  vanish.not( $(this).next(vanish) ).hide() ;
  $(this).next(vanish).toggle();

});

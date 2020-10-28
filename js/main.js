//set variabili
vanish = $(".dis-none") ;
clicked = $("li");
//codice
clicked.click( function(){
  vanish.not( $(this).next(vanish) ).hide() ;
  $(this).next(vanish).toggle();

});

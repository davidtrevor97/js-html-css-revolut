vanish = $(".dis-none") ;
click = $("li");
click.click( function(){
  $(this).next(vanish).toggle();
});

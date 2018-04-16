var sunk = false;

for(i = 0; i < 300; i++){
  if(i % 3 == 0){
    $('#sky').append('<div class="star medium" />');
  }
  if(i % 10 == 0){
    $('#sky').append('<div class="star large" />');
  }
  $('#sky').append('<div class="star small" />');
}

sky_w = $('#sky').width( );
sky_h = $('#sky').height( );
$('.star').each(function( ){
  r_t = Math.random( ) * sky_h;
  r_l = Math.random( ) * sky_w;
  r_t = Math.max(0, r_t - $(this).width( ));
  r_l = Math.max(0, r_l - $(this).width( ));
  $(this).css({top: r_t, left: r_l});
});

$('#titanic').animate({left: 230}, {duration: 50000, complete: sink_titanic});

function sink_titanic( ){
  sunk = true;
  $('#titanic').addClass('iceberg_hit');
  setTimeout(function( ){ $('#titanic').addClass('sinking'); }, 5000);
}

$('.smokestacks li').each(function( ){
  new_smoke = $('<div class="smoke"><div class="s_plume sp0" /><div class="s_plume sp1" /><div class="s_plume sp2" /><div class="s_plume sp3" /></div>').appendTo(this);
});
  
smoke( );
function smoke( ){
  if(sunk){ return false; }
  $('.smoke').each(function( ){
    $(this).css({top: -20, left: 0, opacity: 1});
    $(this).animate({top: "-=40", left: "+=30", opacity: 0}, {duration: 2000, complete: smoke});
  });
}
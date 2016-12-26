$(function(){$('.animation01').css('visibility','hidden');
$('.animation02').css('visibility','hidden');
$('.animation03').css('visibility','hidden');
$('.animation04').css('visibility','hidden');
$('.animation05').css('visibility','hidden');
$('.animation06').css('visibility','hidden');
$('.animation07').css('visibility','hidden');
$('.animation08').css('visibility','hidden');
$('.animation09').css('visibility','hidden');
$('.animation10').css('visibility','hidden');
$('.animation11').css('visibility','hidden');
$(window).scroll(function(){
 var testWindowHeight = $(window).height(),
     testTopWindow = $(window).scrollTop(),
	 targetPosition;
 $('.animation01').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated fadeIn");
  }
 });
 $('.animation02').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated fadeInRightBig");
  }
 });
 $('.animation03').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated fadeInLeftBig");
  }
 });
 $('.animation04').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated fadeInUp");
  }
 });
 $('.animation05').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated swing");
  }
 });
 $('.animation06').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated zoomIn");
  }
 });
 $('.animation07').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated pulse");
  }
 });
 $('.animation08').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated bounceInDown");
  }
 });
 $('.animation09').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated zoomInDown");
  }
 });
 $('.animation10').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 150){
   $(this).addClass("animated bounceIn");
  }
 });
 $('.animation11').each(function(){
  targetPosition = $(this).offset().top;
  if(testTopWindow > targetPosition - testWindowHeight + 100){
   $(this).addClass("animated bounce");
  }
 });
});});
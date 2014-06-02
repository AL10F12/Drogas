// JavaScript Document
	$(document).ready(function(e){

    $('#logo img').tap(function(e){	
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');
});//click 

    $('#vista img').tap(function(e){	
	 $("#roar")[0].play();	
	 $.mobile.navigate( "#principal" );
	});
	
	$('#tipo').tap(function (e) {
 	 $.mobile.navigate( "#drogas" );
	});
	
	$('#consecuencias').tap(function (e) {
 	 $.mobile.navigate( "#Imagenes" );
	});
	
	$('#acerca').tap(function (e) {
 	 $.mobile.navigate( "#acercade");
	});
	 document.addEventListener("deviceready",function(){
  $('.Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
 },false); //deviceready
});//ready

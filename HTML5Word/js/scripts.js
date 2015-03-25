// <!-- Place in the <head>, after the three links -->	
  $(window).load(function() {
    $('.flexslider').flexslider();
  });
  // Enlace alos iconos de estado de redes sociales
$(function(){
	$('.tooltip-social').tooltip();
});
 

 $(document).ready(function(){


 	$("#portafolio-filtro li a ").click(function(){
 		
 		$("#portafolio-filtro li a.active").removeClass('active');
 		$(this).addClass('active');
 		
 		var filterValue = 'cat-'+ $(this).text().toLowerCase().replace(' ','-');
 		// Condicion
	 	 if(filterValue === "cat-todo"){
	 	 	$('.portafolio-entrada').removeClass('escondidas');
	 	 }else{
	 	 	$(".portafolio-entrada").each(function(){
	 	 		if(!$(this).hasClass(filterValue)){
	 	 			$(this).addClass('escondidas');
	 	 		}else{
	 	 			$(this).addClass('escondidas');
	 	 		}
	 	 	});
	 	 }
	 	 return false;
 	});

 });
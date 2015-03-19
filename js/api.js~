
jQuery(document).ready(function() {
    
  //  function myline() {
  //  }

    $( "#date" ).datepicker(); // Desplegar el calendario al hacer click sobre el input

    $( "#mySliderDiv" ).slider({  // Un slider horizontal, se puede usar para formularios 
        orientation: "horizontal",
         min: 0,
        max: 80,
        value: 50
    });

    $( "#menu" ).menu();
  
    $( "#selectable" ).selectable();  //Selecccionar un solo item en una lista
     $( "#accordion" ).accordion();   // clikc y desplegar texto
   //  $("#tabs-1").accordion();
    // $("#tabs-2").accordion();
    // $("#tabs-3").accordion();
     
     $( "#tabs" ).tabs(); // Tabla con distintos textos

    
    /*Mensajes del usuario*/
       $.getJSON("/json/myline.json", function(data) {
      //console.log(data.myline[0].autor);
      for(var i=0; i<data.myline.length; i++) {   
            $('#tabs-1').prepend('<h3>' + data.myline[i].autor + ": "+data.myline[i].titulo +'</h3>'+'<div><p>'+data.myline[i].contenido+'</p></div>');    
	  } ;
      $("#tabs-1").accordion(); 
	});

    /*Mensajes de los socios */

      $.getJSON("/json/timeline.json", function(data) {
     // console.log(data.myline[0].autor);
      for(var i=0; i<data.timeline.length; i++) {   
           console.log(data.timeline[i].autor);           
         $('#tabs-2').prepend('<h3>' + data.timeline[i].autor + ": "+data.timeline[i].titulo +'</h3>'+'<div><p>'+data.timeline[i].contenido+'</p></div>');    
	  } ;
      $("#tabs-2").accordion(); 
	});


});

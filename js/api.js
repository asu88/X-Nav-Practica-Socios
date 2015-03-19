
jQuery(document).ready(function() {
 
    $( "#date" ).datepicker(); // Desplegar el calendario al hacer click sobre el input

    $( "#mySliderDiv" ).slider({  // Un slider horizontal, se puede usar para formularios 
        orientation: "horizontal",
         min: 0,
        max: 80,
        value: 50
    });

    $( "#menu" ).menu();
  //  $("div").draggable() ;     // Arrastrar cualquier div
  //  $( "div" ).resizable();   // Maximizar y minimizar el div arrastrando

    $( "#selectable" ).selectable();  //Selecccionar un solo item en una lista
     $( "#accordion" ).accordion();   // clikc y desplegar texto
     $("#tabs-1").accordion();
     $("#tabs-2").accordion();
     $("#tabs-3").accordion();
     
     $( "#tabs" ).tabs(); // Tabla con distintos textos

});

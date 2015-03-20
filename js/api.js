
jQuery(document).ready(function() {
    //$("title").html("Socios");    
    var newMsg =0;
     var value=0;
     var newdata ={};
    var incremento=0;
    $( "#date" ).datepicker(); // Desplegar el calendario al hacer click sobre el input


    $( "#menu" ).menu();
  
   // $( "#selectable" ).selectable();  //Selecccionar un solo item en una lista
     $( "#accordion" ).accordion();   // clikc y desplegar texto
     $( "#tabs" ).tabs(); // Tabla con distintos textos
    // $("#refresh").click()
    
    /*Mensajes del usuario*/
   
    function myline(){
        $.getJSON("json/myline.json", function(data) {

          for(var i=0; i<data.myline.length; i++) {   
                $('#tabs-1').prepend('<h3>' + data.myline[i].autor + ": "+data.myline[i].titulo +'</h3>'+'<div><p>'+data.myline[i].contenido+'</p><p>Date:'+data.myline[i].fecha+'</p></div>');    
	      } ;
          $("#tabs-1").accordion(); 
	});

    }

    /*Mensajes de los socios */
    function timeline(){
          $.getJSON("json/timeline.json", function(data) {
         // console.log(data.myline[0].autor);
         //newMsg =0; 
         for(var i=0; i<data.timeline.length; i++) {   
              
             $('#tabs-2').prepend('<h3>' + data.timeline[i].autor + ": "+data.timeline[i].titulo +'</h3>'+'<div><p>'+data.timeline[i].contenido+'</p><p>Date:'+data.timeline[i].fecha+'</p></div>');    
	      } ;

         $("#tabs-2").accordion();   
         if (newMsg == 0) {
              $("#refresh").hide();     
        
          }else{
            $("#refresh").html(newMsg); 
            //$("#refresh").hide(); 
          } 	
       
    });
    }
    
    function update(){
    
    $.getJSON("json/update.json", function(data) {
        
       
        
        value =data.update.length; 
        newdata = data;        
        // newMsg++       
        $("#refresh").html("+"+newMsg); 

        $("#refresh").show();
        //$('#tabs-2').accordion();               
        });    
       
   /*     ; */
        setTimeout(update,20000);   
   

        if(value == newMsg){
            incremento =incremento;
        }else{
            incremento = value - newMsg;         
        }
        newMsg = value;    
        $("title").html("Socios("+newMsg+")");
        
       //$('#tabs-2').accordion(); 
       
    }

    $("#refresh").click(function(){
        if(incremento!=0){
            $("#refresh").html("+0");
            $("title").html("Socios");
                    //$("#tabs-2").accordion();       
           

            for(var i=0; i<newdata.update.length; i++) {   
                      
                  $('#tabs-2').prepend('<h3>' + newdata.update[i].autor + ": "+newdata.update[i].titulo +'</h3>'+'<div><p>'+newdata.update[i].contenido+'</p><p>Date:'+newdata.update[i].fecha+'</p></div>');    
           } ;
        }else{
            alert("no hay mensajes nuevos");
        }
    }


    );
        
    myline();
    timeline();
   
    update();

});

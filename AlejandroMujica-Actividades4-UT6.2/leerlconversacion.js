$(document).ready(function() {
    $("#cargar").click(function() {
        $(".text").load("conversacion.txt", function(){
            alert("Done Loading");
        });
   }); 
}); 

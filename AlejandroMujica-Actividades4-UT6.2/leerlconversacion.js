$(document).ready(function() {
    $("#Cargar").click(function() {
        $.ajax({
            url : "conversacion.txt",
            dataType: "text",
            success : function (data) {
                $(".text").html(data);
            }
        });
    });
}); 

$(document).ready(function() {
    $("#lesen").click(function() {
        $.ajax({
            url : "conversacion.txt",
            dataType: "text",
            success : function (data) {
                $(".text").html(data);
            }
        });
    });
}); 

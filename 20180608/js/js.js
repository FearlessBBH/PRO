$(document).ready(function () {

    $("#clear").click(function () {
        $("input[type=text]").val("");
    });

    $("#next").click(function () {
        var a = $(".t1 .flex-item:nth-child(1) input").val();
        var b = $(".t1 .flex-item:nth-child(2) input").val();
        var c = $(".t1 .flex-item:nth-child(3) input").val();
        alert(a + "," + b + "," + c);



    });




});
$(function(){

    var body = $('body');



    $(".box h1").click(function(){
    $(".box").css("background-color","blue")
    })
    $(".box").click(function(){
    $(".box H1").css("background-color","yellow")
    })
   
    function alterarbackground () {
        body.css("background-color","lightblue")
        body.css("color","blue")
    }
    alterarbackground();
})
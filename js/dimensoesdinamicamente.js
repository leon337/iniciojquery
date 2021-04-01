$(function(){
 
    // PEGANDO O VALOR DA LARGURA DO ELEMENTO
    $(".box-div").width();
    // SETANDO O VALOR DA LARGURA DO ELEMENTO
    $(".box-div").css("width","80%");
    
    // PEGANDO O VALOR DA LARGURA DO ELEMENTO
    $(".box-div").height();
    // SETANDO O VALOR DA LARGURA DO ELEMENTO
    $(".box-div").height(400);

    console.log("Width: "+$('.box-div').width());
    console.log("Inner Width: "+$('.box-div').innerWidth());
    console.log("Outer Width: "+$('.box-div').outerWidth());
    

    console.log("***********")

    console.log("Heigth: "+$('.box-div').height());
    console.log("Inner Heigth: "+$('.box-div').innerHeight());
    console.log("Outer Hiegth: "+$('.box-div').outerHeight());
})
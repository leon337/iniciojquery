
/*
$(function(){
    alert("Já estou funcionando");
});
*/
/*
$(document).ready(function() {
    alert("Outra forma de falar Hello Word!")
})
*/

/*
$(window).on('load', function() {
    alert("Só apareço depois que a pagina carrega todos os elementos")

})
*/

$(function() {

    function CliqueHover()  {

    $(".titulo1").hover(function() {
        $(".titulo2").css("color","red")
    }, function() {
        $(".titulo2").css("color","blue")
    })

    $("textarea").focus(function() {
        console.log("Botei focu no textarea")
    })
    $("textarea").blur(function() {
        console.log("Sai do focus")
    })

    }

    function alterandoSelect() {
        $('select').change(function(){
            alert("Meu select foi alterado")
           
        })
    }

    CliqueHover();
    alterandoSelect();
});



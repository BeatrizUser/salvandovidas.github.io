var questionario = [
    {
        pergunta: "Oi, Tudo bem?",
        option1: "Sim",
        option2: "Não",
        nextquestion1: 1,
        nextquestion2: 2,
    },
    {
        pergunta: "Porque?",
        option1: "porque, Sim",
        option2: "porque, Não",
        nextquestion1: 0,
        nextquestion2: 2,
    },
    {
        pergunta: "Ta ok!",
        option1: "ok",
        option2: "Valeu",
        nextquestion1: 0,
        nextquestion2: 1,
    },
]






$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


function exibirpergunta(question){
    $("#question").text(`${question.pergunta}`)
    $("#resposta").html(`'<button class="btnresposta" id="sim">${question.option1}</button><button class="btnresposta" id="nao">${question.option2}</button>'`)
    $("#sim").click(function(){
        var idnext = question.nextquestion1
        exibirpergunta(questionario[idnext])
    });
    $("#nao").click(function(){
        var idnext = question.nextquestion2
        exibirpergunta(questionario[idnext])
    });
}

$( document ).ready(function() {
    exibirpergunta(questionario[0])
  });
var jogador1 = localStorage.getItem("jogador1");
document.getElementById("jogador1").innerHTML= jogador1 ;
var pontos= 0;
document.getElementById("score_jogador_1").innerHTML=' : ' +pontos;
var jogador2= localStorage.getItem("jogador2");
document.getElementById("jogador2").innerHTML= jogador2;
var pontos2=0;
document.getElementById("score_jogador_2").innerHTML= ' : ' +pontos2;
document.getElementById("turno_de_pergunta").innerHTML='Turno de pergunta de :   ' +jogador1;
document.getElementById("turno_de_resposta").innerHTML='Turno de resposta de :   ' +jogador2;
function enviar(){
    getpalavra=document.getElementById ("word").value;
 palavra= getpalavra.toLowerCase();
 console.log(palavra)
  chaAt1=palavra.charAt(1);
  console.log (chaAt1)
  comprimento=Math.floor(palavra.length/2);
  chaAt2=palavra.charAt(comprimento)
  comprimento2=palavra.length-1;
  chaAt3=palavra.charAt(comprimento2);
  console.log(chaAt2);
  console.log(chaAt3);
  removechaAt1=palavra.replace(chaAt1, "_");
  removechaAt2=removechaAt1.replace(chaAt2,"_");
  removechaAt3=removechaAt2.replace(chaAt3, "_");
  console.log(removechaAt3);
  questionWord = "<h4 id='wordDisplay'> P. "+removechaAt3+"</h4>";
   input_box = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
     row = questionWord + input_box + checkButton ;
    document.getElementById("output").innerHTML = row;
     document.getElementById("word").value = "";

}
 turno_pergunta="jogador1";
 turno_de_resposta="jogador2";
 function check() {
get_resposta =document.getElementById("inputCheckBox").value;
resposta=get_resposta.toLowerCase();
if (palavra==resposta){

if (turno_de_resposta=="jogador1"){
 pontos=pontos+1;
 document.getElementById("score_jogador_1").innerHTML=' : ' +pontos;
}
else{
    pontos2=pontos2+1;
    document.getElementById("score_jogador_2").innerHTML= ' : ' +pontos2;
}
}
if (turno_de_resposta=="jogador1"){
    turno_de_resposta="jogador2"
    document.getElementById("turno_de_resposta").innerHTML='Turno de resposta de :   ' +jogador2;
}
else{
    turno_de_resposta="jogador1"
    document.getElementById("turno_de_resposta").innerHTML='Turno de resposta de :   ' +jogador1;
}
if (turno_pergunta=="jogador1"){
    turno_pergunta="jogador2"
    document.getElementById("turno_de_pergunta").innerHTML='Turno de pergunta de :   ' +jogador2;
  
}
else{
    turno_de_pergunta="jogador1"
    document.getElementById("turno_de_pergunta").innerHTML='Turno de pergunta de :   ' +jogador1;
}
document.getElementById("output").innerHTML="";
}

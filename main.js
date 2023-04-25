function login(){
jogador_1=document.getElementById("player1Name").value;
jogador_2=document.getElementById("player2Name").value;
localStorage.setItem("jogador1",jogador_1);
localStorage.setItem("jogador2",jogador_2);
window.location="game_page.html"
}

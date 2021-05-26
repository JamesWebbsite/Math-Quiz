function addUser(){
    Player_1 = document.getElementById("player1Username").value;
    localStorage.setItem("Player 1",Player_1);
    Player_2 = document.getElementById("player2Username").value;
    localStorage.setItem("Player 2",Player_2);
    window.location="game.html";
}
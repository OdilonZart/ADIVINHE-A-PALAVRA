function addUser(){
    player1Name= document.getElementById("player1Name").value
    player2Name= document.getElementById("player2Name").value
    localStorage.setItem("player1", player1Name)
    localStorage.setItem("player2", player2Name)
    window.location= "gamepage.html"
}
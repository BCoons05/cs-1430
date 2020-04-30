const markers = ["X", "O"]
let players = ["me", "you"]
let playerTurn = 0
let totals = []
const winCodes = [7, 56, 73, 84, 146, 273, 292, 448]
let gameOver
let tie = false
winLoss = {}

getNames = () => {
    players[0] = prompt("enter name for player 1")
    players[1] = prompt("enter name for player 2")

    for(i = 0; i < players.length; i++){
        winLoss[players[i]] = 0
    }

    winLoss["ties"] = 0

    document.getElementById("player-one-area").innerHTML = `<div id="marker">X</div><div>${players[0]}</div><div id="p1-wins">Wins: ${winLoss[players[0]]}</div><div class="ties">Ties: ${winLoss["ties"]}</div>`
    document.getElementById("player-two-area").innerHTML = `<div id="marker">O</div><div>${players[1]}</div><div id="p2-wins">Wins: ${winLoss[players[1]]}</div><div class="ties">Ties: ${winLoss["ties"]}</div>`

    startGame()
}

startGame = () => {
    let counter = 1
    let innerDiv = ""

    totals = [0, 0]
    gameOver = false
    tie = false

    for(i = 1; i <= 3; i++){
        innerDiv += `<div id="row${i}">`

        for(j = 1; j <= 3; j++){
            innerDiv += `<div onclick="placeMarker(this, ${counter})"></div>`
            counter *= 2
        }

        innerDiv += '</div>'

        document.getElementById("board").innerHTML = innerDiv
    }
}

placeMarker = (clickedSquare, value) => {
    if(!gameOver){
        clickedSquare.innerHTML = `<span id="markers">${markers[playerTurn]}</span>`

        totals[playerTurn] += value
        if(checkWin()){
            winCodes.forEach(num => {
                switch(totals[playerTurn] & num){
                    case(7):
                        document.getElementById("row1").style.color = "red"
                        break
                    case(56): 
                        document.getElementById("row2").style.color = "red"
                        break
                    case(73):
                        document.getElementById("row1").firstChild.style.color = "red"
                        document.getElementById("row2").firstChild.style.color = "red"
                        document.getElementById("row3").firstChild.style.color = "red"
                        break
                    case(84):
                        document.getElementById("row1").lastChild.style.color = "red"
                        document.getElementById("row2").children[1].style.color = "red"
                        document.getElementById("row3").firstChild.style.color = "red"
                        break
                    case(146):
                        document.getElementById("row1").children[1].style.color = "red"
                        document.getElementById("row2").children[1].style.color = "red"
                        document.getElementById("row3").children[1].style.color = "red"
                        break
                    case(273):
                        document.getElementById("row1").firstChild.style.color = "red"
                        document.getElementById("row2").children[1].style.color = "red"
                        document.getElementById("row3").lastChild.style.color = "red"
                        break
                    case(292):
                        document.getElementById("row1").lastChild.style.color = "red"
                        document.getElementById("row2").lastChild.style.color = "red"
                        document.getElementById("row3").lastChild.style.color = "red"
                        break
                    case(448):
                        document.getElementById("row3").style.color = "red"
                        break
                }
            })
            setTimeout(function(){
                if(!tie){
                    document.getElementById("board").innerHTML = `<div id="end-screen"><div>${players[playerTurn]} Wins!</div><div id="btn"><button onclick="startGame()">Play Again</button></div></div>`
                } else {
                    document.getElementById("board").innerHTML = `<div id="end-screen"><div>Ahhh, the only outcome that should ever come from this game has occurred... A tie, you have both failed</div><div id="btn"><button onclick="startGame()">Play Again</button></div></div>`
                }
            }, 3000)
            
        } else {
            if(playerTurn){
                playerTurn = 0
                document.getElementById("player-two-area").style.backgroundColor = "aqua"
                document.getElementById("player-one-area").style.backgroundColor = "rgb(0, 146, 146)"
            } else {
                playerTurn = 1
                document.getElementById("player-two-area").style.backgroundColor = "rgb(0, 146, 146)"
                document.getElementById("player-one-area").style.backgroundColor = "aqua"
            }

            clickedSquare.attributes["0"].nodeValue = ""
        }
    }
}

checkWin = () => {
    winCodes.forEach(num => {
        if((totals[playerTurn] & num) == num){
            gameOver = true;
            winLoss[players[playerTurn]]++
            if(playerTurn){
                document.getElementById("p2-wins").innerHTML = `Wins: ${winLoss[players[playerTurn]]}`
            } else {
                document.getElementById("p1-wins").innerHTML = `Wins: ${winLoss[players[playerTurn]]}`
            }
        }
    })

    if(totals[0] + totals[1] == 511 && !gameOver){
        gameOver = true
        tie = true
        winLoss["ties"]++
        tieHTML = document.getElementsByClassName('ties')
        tieHTML[0].innerHTML = `Ties: ${winLoss["ties"]}`
        tieHTML[1].innerHTML = `Ties: ${winLoss["ties"]}`
    }

    return gameOver
}


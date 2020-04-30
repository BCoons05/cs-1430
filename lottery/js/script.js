nums = []
max = 6
addedHtml = ""

choice = prompt("How many numbers would you like? (max 6)")

while(choice < 1 || choice > max){
    choice = prompt("Sorry your choice must be between 1 and 6, please try again.")
}

window.onload = function(){

    createArray(choice)

    generateHTML()

    button = document.getElementById("btn")
    
    button.onclick = function(){
        nums = []
        addedHtml = ""

        createArray()
        generateHTML()
    }

}

createArray = () => {
    for(i = 0; i < choice; i++){
        randomNum = Math.floor(Math.random() * 99) + 1
        nums.push(randomNum)
    }
}

generateHTML = () => {
    for(i = 0; i < nums.length; i++){
        if(i < nums.length - 1){
            addedHtml += `<span id="num">${nums[i]}-</span>`
        } else {
            addedHtml += `<span id="num">${nums[i]}</span>`
        }
    }

    document.getElementById("numbers").innerHTML = addedHtml
}


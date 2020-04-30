

window.onload =

function(){
    choice = prompt("Enter 1 for story 1 and anything else for story 2")
    noun1 = prompt("enter a noun: ")
    noun2 = prompt("enter another noun: ")
    verb1 = prompt("enter a verb: ")
    verb2 = prompt("enter another verb: ")
    adj1 = prompt("enter an adjective: ")
    adj2 = prompt("enter another adjective: ")

    if(choice == "1"){
        document.getElementById("story").innerHTML
         = 
         '<p>"We should really have the <span id="noun1"></span>\'s air quality <span id="verb1"></span>, these are <span id="adj1"></span> killers"<br>"you are the <span id="adj2"></span> killer, go back to the <span id="noun2"></span> and <span id="verb2"></span>."'
    } else {
        document.getElementById("story").innerHTML
         = 
         '<p>I tried. I tried to <span id="verb1"></span> to <span id="noun1"></span> and be his <span id="adj1"></span> friend, <br>but that is like trying to <span id="verb2"></span> with an <span id="adj2"></span> <span id="noun2"></span>.</p>'
    }
    
    document.getElementById("noun1").innerHTML = noun1
    document.getElementById("adj1").innerHTML = adj1
    document.getElementById("verb1").innerHTML = verb1
    document.getElementById("noun2").innerHTML = noun2
    document.getElementById("adj2").innerHTML = adj2
    document.getElementById("verb2").innerHTML = verb2

}


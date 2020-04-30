window.onload =

function(){
    name = prompt("What be thy name? ")
    age = prompt("How old are ye?")
    month = prompt("What month were ye born amigo?")

    if(month.toLowerCase() == "january" || month.toLowerCase() == "february" || month.toLowerCase() == "december"){
        alert("G'Day " + name + ". Ye be " + age + " wee years old, and ye were born in the month of " + month + " which is of course in the winter time")
    } else if(month.toLowerCase() == "march" || month.toLowerCase() == "april" || month.toLowerCase() == "may"){
        alert("G'Day " + name + ". Ye be " + age + " wee years old, and ye were born in the month of " + month + " which is of course in the spring time")
    } else if(month.toLowerCase() == "june" || month.toLowerCase() == "july" || month.toLowerCase() == "august"){
        alert("G'Day " + name + ". Ye be " + age + " wee years old, and ye were born in the month of " + month + " which is of course in the summer time")
    } else {
        alert("G'Day " + name + ". Ye be " + age + " wee years old, and ye were born in the month of " + month + " which is of course in fall")
    }

    
        document.getElementById("container").innerHTML
         = 
         '<div class="img-container"><img src="img/giffy.gif" /></div><div class="text-container"><h1>Congrats <span id="name"></span>! We freaking did it!</h1></div>'

    
    document.getElementById("name").innerHTML = name


}
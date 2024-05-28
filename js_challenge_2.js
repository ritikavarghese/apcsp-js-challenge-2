function state() {     
    var liveIn = prompt("What is the name of your state?");     
    while (!liveIn) {         
        alert("What is the name of your state?");         
        liveIn = prompt("What state do you live in?");     
    }     
    var response = "You live in ";     
    var period = ".";     
    alert(response + liveIn + period); 
}
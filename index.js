const Display = document.querySelector(".display");
console.log(Display)

function AppendChildDisplay(inp) {
    Display.value += inp;
    
}

function Result(){
    try{
        Display.value = eval(Display.value)
    }
   catch(err) {
    Display.value = "Error";
   }
}

function Clear () {
    Display.value = "";
}
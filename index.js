let outputValue = document.getElementById("output-value");

function display(num) {
    outputValue.value += num; 
    document.getElementById("lbltext").innerHTML="InValid";
    document.getElementById("lbltext").style.visibility="hidden";
    document.getElementById("lbltext").style.color="red";   
}
function Calculate() {
    try{
        outputValue.value = eval(outputValue.value)
    }
    catch(err)
    {
        document.getElementById("lbltext").innerHTML="InValid";
        document.getElementById("lbltext").style.visibility="visible";
        document.getElementById("lbltext").style.color="red";
    }
}
function Clear() {
    outputValue.value = "";
    document.getElementById("lbltext").innerHTML="InValid";
    document.getElementById("lbltext").style.visibility="hidden";
    document.getElementById("lbltext").style.color="red";
}
function del() {
    outputValue.value = outputValue.value.slice(0,-1)
    
}
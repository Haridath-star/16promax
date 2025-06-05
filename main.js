function Calculate(){
    var x=parseInt(document.getElementById("num1").value);
console.log(x);
var y=parseInt(document.getElementById("num2").value);
console.log(y);
var op=document.getElementById("operator").value;
var result=0;
if(op=='+'){
    result=x+y;
}
else if(op=='-'){
    result=x-y;
}
else if(op=='*'){
    result=x*y;
}
else if(op=='/'){
    result=x/y;
}
document.getElementById("result-text").innerText=result.toFixed(2);
event.preventDefault();
}
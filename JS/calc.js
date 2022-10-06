function insert(aux){
   let numero = document.getElementById("resultado").innerHTML;
   document.getElementById("resultado").innerHTML = numero + aux;
}
//
function clean(){
    document.getElementById("resultado").innerHTML = "";
}
//
function erase(){
    let result = document.getElementById("resultado").innerHTML
    document.getElementById("resultado").innerHTML = result.substring(0, result.length -1);
}
//
function calcular(){
    let result = document.getElementById("resultado").innerHTML;
    if(result !== ""){
        document.getElementById("resultado").innerHTML = eval(result);
    }
}
//Numeros
let n0 = document.getElementById("n0");
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let n7 = document.getElementById("n7");
let n8 = document.getElementById("n8");
let n9 = document.getElementById("n9");
let p = document.getElementById(".");
n0.addEventListener("click", function(){insert(0)});
n1.addEventListener("click", function(){insert(1)});
n2.addEventListener("click", function(){insert(2)});
n3.addEventListener("click", function(){insert(3)});
n4.addEventListener("click", function(){insert(4)});
n5.addEventListener("click", function(){insert(5)});
n6.addEventListener("click", function(){insert(6)});
n7.addEventListener("click", function(){insert(7)});
n8.addEventListener("click", function(){insert(8)});
n9.addEventListener("click", function(){insert(9)});
p.addEventListener("click", function(){insert(".")});
//Operadores
let adicao = document.getElementById("+");
let mult = document.getElementById("x");
let sub = document.getElementById("-");
let div = document.getElementById("/");
adicao.addEventListener("click", function(){insert("+")});
mult.addEventListener("click", function(){insert("*")});
sub.addEventListener("click", function(){insert("-")});
div.addEventListener("click", function(){insert("/")});
//Limpar
let limpar = document.getElementById("CE");
limpar.addEventListener("click", function(){clean()});
//Apagar
let apagar = document.getElementById("C");
apagar.addEventListener("click", function(){erase()});
//Igual
let igual = document.getElementById("=");
igual.addEventListener("click",function(){calcular()});





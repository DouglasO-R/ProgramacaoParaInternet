var btn = document.querySelector("#btnEnvia");
btn.addEventListener("click",exer10);

function exer1(){

    var x = "ola mundo";
    document.getElementById("exercicio").innerHTML = x;
}

function exer2(){

    var x = prompt("informe seu nome");
    for(var i = 0;i < 10;i++){

        document.write(x + "</br>");
    }
}

function exer3(){

    var x = prompt("Informe seu nome");
    var y = parseInt(prompt("Informe quantas vezes"));
    
    for(var i = 0; i < y; i++){

        document.write(x + "</br>");
    }
}

function exer5(){

    var x = parseInt(prompt("informe o numero"));
    var quadrado;
    quadrado = x * x;
    document.getElementById("exercicio").innerHTML = quadrado;
}

function exer6(){

    var x = parseInt(prompt("informe o numero"));
    var y = parseInt(prompt("informe um numero"));

    if(x > y){
        document.getElementById("exercicio").innerHTML = x;
    } else {
        document.getElementById("exercicio").innerHTML = y;
    }
}

function exer8(){
    var x = parseInt(prompt("informe o numero"));
    var y = parseInt(prompt("informe um numero"));
    var soma;

    soma = (x+y);
    document.getElementById("exercicio").innerHTML = soma;
}

function exer9(){

    var x = parseInt(prompt("valor"));
    if(( x % 2 ) == 0){
        document.write("par");
    } else {
        document.write("impar");
    }
}

function exer10(){

    var x = parseInt(prompt("valor"));
    var y = parseInt(prompt("valor"));
    var op = prompt("operacao");
    var calcula;

   switch(op){
       case "+":
       document.getElementById("exer").innerHTML =  (x + y);
       break;
       case "-":
       document.getElementById("exer").innerHTML =  (x - y);
       break;
       case "*":
       document.getElementById("exer").innerHTML = (x * y);
       break;
       case "/":
       document.getElementById("exer").innerHTML = (x / y);
       break;
       default:
   }
    
}
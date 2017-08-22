

function exer11(){
   
    var btn = document.querySelector("#btnEnvia");
    btn.addEventListener("click",exer11);

    var x = parseInt(prompt("informe o valor"));
    var y = parseInt(prompt("informe o valor"));
    var expo = (x ** y);

    document.write(expo);
}

function exer12(){
    var btn = document.querySelector("#btnEnvia");
    btn.addEventListener("click",exer12);

    var v1 = parseInt(prompt("informe o valor"));
    var v2 = parseInt(prompt("informe o valor"));
    var v3 = parseInt(prompt("informe o valor"));
    var resultado = (v1 * v2) / v3;

    document.write(resultado);
}

function exer13(){

    var btn = document.querySelector("#btnEnvia");
    btn.addEventListener("onclik",exer13);

    var x = parseInt(prompt("informo o valor"));
    var y = parseInt(prompt("quantas pessoas"));
    var vp = (x / y);

    document.write(vp);
}

function exer14(){
    var btn = document.querySelector("#btnEnvia");
    btn.addEventListener("onclik",exer14);

    var b = parseInt(prompt("informe o valor"));
    var c = parseInt(prompt("informe o valor"));
    var a = ((b * b) + (c * c));

 
    document.write(Math.sqrt(a));
}

function exer15(){
    var btn = document.querySelector("#btnEnvia");
    btn.addEventListener("onclik",exer15);

    var x = parseInt(prompt("informe o valor"));
    var y = parseInt(prompt("informe o valor"));

    var calcula = (x / y) * 100;

    document.write(calcula + "%");
}
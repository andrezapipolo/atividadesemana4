/*Faça um programa que dado um número
imprime no (console.log) a tabuada do mesmo de 1 a 10. */

 function tabuada(num){
     let stringtabuada = ""
     for(i = 1; 1 <= 10; i++){
     let resultado = num * i
      stringtabuada - `${stringtabuada} ${num} x ${i} - ${resultado}\n` 
 } 
      return stringtabuada

}

   console.log(tabuada(12))
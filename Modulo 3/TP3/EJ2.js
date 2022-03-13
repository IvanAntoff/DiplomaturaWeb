var numeros = [20, 100, 2, 4, 50, 6, 1, 99, 22];
var maximo = undefined;

for (let i = 0; i < numeros.length; i++) {
    if(i == 0) maximo = numeros[i];
    else if (maximo < numeros[i]) maximo = numeros[i];
} 

if (maximo) console.log('El mayor de todos los numeros es: ' + maximo);
else console.log('No se encontro un mayor.');
var distancia = 10;
if (typeof(distancia) !== 'number' || distancia < 0) console.log( 'Distancia invalida');
else if (distancia <= 1000) console.log( 'Pie');
else if (distancia <= 10000) console.log( 'Bicicleta');
else if (distancia <= 30000) console.log( 'Colectivo');
else if (distancia <= 100000) console.log( 'Auto');
else console.log( 'Avion');
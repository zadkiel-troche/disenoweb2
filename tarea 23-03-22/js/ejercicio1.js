
var tabla_mul=[1,2,3,4,5,6,7,8,9,10]
var num=5;

for(i=0; i<tabla_mul.length; i++){
    console.log(num+' x '+tabla_mul[i]+' = '+tabla_mul[i]*num)
}

console.log('\n')
console.log('Imprimir  las tablas del 6 al 8')
var num_1=6;
var num_2=8;

for(i=num_1; i<=num_2; i++){
    for(j=0; j<tabla_mul.length; j++){
        console.log(i+' x '+tabla_mul[j]+' = '+tabla_mul[j]*i)
    }
}
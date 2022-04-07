
var tabla_mul=[1,2,3,4,5,6,7,8,9,10]
var num=5;

console.log('Imprimir la tabla del '+num)
for(i=0; i<tabla_mul.length; i++){
    console.log(num+' x '+tabla_mul[i]+' = '+tabla_mul[i]*num)
}

console.log('\n')
var num_1=2;
var num_2=8;
console.log('Imprimir las tablas del '+num_1+' al '+num_2)

if(num_1>num_2){
    alert('No podemos procesar su petición, intente poner un número mayor al primero ingresado\n')
}else{
    for(i=num_1; i<num_2+1; i++){
        for(j=0; j<tabla_mul.length; j++){
            console.log(i+' x '+tabla_mul[j]+' = '+tabla_mul[j]*i)
        }
        console.log('\n')
    }
}
function busquedalineal(arr,elemento){
for(let i=0;i<arr.length;i++){
    if(arr[i]===elemento){
        return i;
    }
}
return -1;
}
 const arreglo=[10,8,7,6,4,9];
 const elementobuscado=6;
 const indice=busquedalineal(arreglo,elementobuscado);
 console.log(`El elemnto buscado ${elementobuscado} se encuentra en el indice ${indice}`);
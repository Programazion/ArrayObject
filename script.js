console.log("Loading Java Script");

//Array
var firstArray =[1, "information", Date(), "viernes"]
console.log(firstArray);
console.log(firstArray.length);
console.log(firstArray[0]);
console.log(firstArray[1]);
console.log(firstArray[2]);
console.log(firstArray[3]);

//Recorrido Arreglo con for
console.log("Recorrido Arreglo=>")
for(let i=0; i<firstArray.length; i++){
    console.log(firstArray[i]);
}

//Recorrido Arreglo con foreach
console.log("Recorrido Arreglo con foreach=>")
firstArray.forEach((item)=>{
    console.log(item)
});
//Recorrido Arreglo con map
console.log("Recorrido Arreglo con map=>")
firstArray.map((item)=>{
    console.log(item)
});

//object

var firstObject={
    a: "viernes",
    información: "7:50",
    dolar: 4550,
    currentDate: {
        dia: 12,
        mes: "mayo",
        annio: 2023

    }

}

console.log(firstObject);

//Recorrido Objeto y subojecto
console.log("Recorrido Objeto");

for(let item in firstObject){

    console.log("KEY==>", item);
    console.log("value=>", firstObject[item]);

if (typeof firstObject[item]=="object"){
    console.log("Es un objeto")
    console.log("Recorrido SubObjeto")

    let secondObject= firstObject[item];
    
    for (let subitem in secondObject){
        console.log("KEY==>", subitem);
        console.log("value=>", secondObject[subitem]);
    }
}
}

//Recorrido Objeto y subojecto using Objects
console.log("Recorrido Objeto using objects");

Object.keys(firstObject).forEach((item)=>{
    console.log("Key=>", item);
    console.log("value=>", firstObject[item])
});

//Recorrido Objeto y subojecto using entries Key-Value
console.log("Recorrido Objeto using entries Key-Value");
Object.entries(firstObject).forEach(function([key, value]){
    console.log(key, value);
})

//Recorrido Objeto y subojecto using entries Key-Value item
console.log("Recorrido Objeto using entries Key-Value");
Object.entries(firstObject).forEach(function(item){
    console.log(item);
})


//ArrayObject
var firstArrayObject =[
    {
    a: "viernes",
    información: "7:50",
    dolar: 4550,
    currentDate: {
        dia: 12,
        mes: "mayo",
        annio: 2023       
    }
},
{
    name: "juan",
    Lastname: " Perez",
    id: 123456
}
]
console.log("FIRST ARRAY OBJECT");
console.log(firstArrayObject);
console.log(firstArrayObject.length);

console.log("Recorriendo Arreglo ");
firstArrayObject.map((item)=>{

    console.log(typeof item, item);
    console.log("recorriendo objeto")
    Object.entries(item).forEach(([key, value])=>{
        console.log(key,value);
    })

});

console.log(firstArrayObject[0]);
console.log(firstArrayObject[0].dolar)

let dolar= firstArrayObject[0].dolar;

console.log(dolar + 1);

console.log(firstObject);

let day= firstObject.currentDate;   
console.log(day);

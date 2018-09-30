let add = function(ver){
  return ver+99;
}
let string = function(ver){
  return ver+"string";
}

let arr = [1, 2, 3, ,4];


let replace = function(kekus, maximus){
  var reserv = [];
  for(var i =0; i<kekus.length; i++){
    if(kekus[i]!==NaN && kekus[i]!==undefined){
    //lol.push(maximus(kekus[i]));//если в новый массив не нужно вносить пустые элементы старого
    reserv[i]=maximus(kekus[i]);
  }
  }
  return reserv;
};


var newarr = replace(arr,function(ver){
  return ver+"string";
});
console.log(newarr);
var newarr = replace(arr,function(ver){
  return ver+10;
});
console.log(newarr);


//вызов метода map() для сравнения
var map_one = arr.map(function(ver){
  return ver+"string";
});
console.log(map_one)
var map_one = arr.map(function(ver){
  return ver+10;
});
console.log(map_one)
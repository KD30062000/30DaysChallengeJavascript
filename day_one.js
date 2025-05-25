// console.log("Learn with Koushik")


function Sum(a,b){
    const s=a+b;
    return s;
}
console.log(Sum(5,5));

let f=function(a,b){
    return a+b;
}
console.log(f(5,5))

let f1=(a,b)=>{
    return a+b;
}
console.log(f1(5,5))

// Immediate Invoke
let f2=function(a,b){
    return a+b;
}(2,3)
console.log(f2)
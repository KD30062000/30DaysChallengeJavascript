// console.log("Learn with Koushik")


// function Sum(a,b){
//     const s=a+b;
//     return s;
// }
// console.log(Sum(5,5));

// let f=function(a,b){
//     return a+b;
// }
// console.log(f(5,5))

// let f1=(a,b)=>{
//     return a+b;
// }
// console.log(f1(5,5))

// // Immediate Invoke
// let f2=function(a,b){
//     return a+b;
// }(2,3)
// console.log(f2)

// function HelloWorld(){
//     function f(a,b){
//         return a+b;
//     }
//     return f
// }
// const numsum=HelloWorld()
// console.log(numsum(5,5))


// function HelloWorld(){
//     return function(a,b){
//         return a+b;
//     }
// }
// const numsum=HelloWorld()
// console.log(numsum(5,5))


// function HelloWorld(){
//     return (a,b)=>(a+b)
// }
// const numsum=HelloWorld()
// console.log(numsum(5,5))


// function HelloWorld(){
//     return ()=>("Hello World")
// }
// const numsum=HelloWorld()
// console.log(numsum(5,5))

// var createHelloWorld=function(){
//     return function(...args){
//         args.map((item)=>{console.log(item.nickName)})
//         return "Hello World"
//     }
// }
// const numsum=createHelloWorld()
// const f=numsum({nickName:"kd",location:"kolkata"},{nickName:"sanu",location:"Bangaluru"})
// console.log(f)

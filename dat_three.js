// const obj={
//     name:"Koushik Das",
//     location:"Kolkata",
//     greet(){
//         console.log("Hello World")
//     }
// }
// obj.greet()

// const DemoFunction=function(outerVal){
//     let obj={
//         add(innerVal){
//             return innerVal+outerVal
//         }
//     }
//     return obj;
// }
// console.log(DemoFunction(10).add(5))

// const DemoFunction=function(outerVal){
//     const obj={
//         greet(innerVal){
//             console.log(outerVal+innerVal)
//         }
//     }
//     return obj;
// }
// const numsum=DemoFunction(10)
// numsum.greet(5)

// const DemoFunction=function(outerVal){
//     function Add(innerVal1){
//         return outerVal+innerVal1
//     }
//     function Sub(innerVal2){
//         return outerVal-innerVal2
//     }
//     return{
//         Add,Sub
//     }
// }
// console.log(DemoFunction(10).Add(5))
// console.log(DemoFunction(10).Sub(5))


// const DemoFunction=function(val){
//     const obj={
//         toBe(innerVal1){
//             return innerVal1===val;
//         },
//         notToBe(innerVal2){
//             return innerVal2===val;
//         }
//     }
//     return obj;
// }
// const numsum=DemoFunction(10)
// console.log(numsum.toBe(10));
// console.log(numsum.notToBe(5));

const DemoFunction=function(val){
    const obj={
        toBe(innerVal1){
            if(innerVal1===val){
                return {"value":true}
            }
            else{
                return{"error":"Not Equal"}
            }
        },
        notToBe(innerVal2){
            if(innerVal2!==val){
                return {"value":true}
            }
            else{
                return{"error":"Not Equal"}
            }
        }
    }
    return obj;
}
const numsum=DemoFunction(10)
console.log(numsum.toBe(10));
console.log(numsum.notToBe(5));


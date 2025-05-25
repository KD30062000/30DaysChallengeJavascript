// const DayTwo=function(){
//     var a=6
//     let f=function(n){
//         return n+a;
//     }
//     return f;
// }
// const numsum=DayTwo();
// console.log(numsum(2));

// const DayTwo=function(){
//     var a=6
//     let f=function(n){
//         return n+a;
//     }
//     a=5
//     return f;
// }
// const numsum=DayTwo();
// console.log(numsum(2));


// const DayTwo=function(n){
//     var count=n;
//     let f=function(){
//         console.log(count++)
//     }
//     return f;
// }
// const numsum=DayTwo(10);
// numsum()
// numsum()
// numsum()


const myFunction=function(n){
    return function(){
        console.log(n++)
    }
}
const numsum=myFunction(10);
numsum()
numsum()
numsum()
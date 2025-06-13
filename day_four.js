const creatFunction=function(init){
    var a=init;
    const obj={
        increement(){
            console.log("Increementing",init)
            return init+=1;
        },
        reset(){
            return init=a;
        },
        decrement(){
            return init-=1;
        }
    }
    return obj;
}
const numsum=creatFunction(5);
console.log(numsum.increement());
// numsum.increement();
console.log(numsum.reset());
console.log(numsum.decrement());
// numsum.reset();
// numsum.reset();

function demo(){
    console.log("function");
}
demo();
demo();

function test1(a,b){
    return a+b;
}
console.log(test1(5,5));

let x = (a,b) => {return a*b};
console.log(x(5,5));

let y = (a,b) => a+b;
console.log(y(100,200));
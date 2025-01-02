// what is exception handling in javascript
//  exception handling is a process of handling runtime errors in a program.

// let x=10;

// console.log(x);
// try{
// console.log(y); // y is not defined
// }
// catch(err){
//     console.log(err.name);
// }
// finally{
//     console.log("This is finally block");
// }

// console.log("This is an example of exception handling in javascript");


function add(x,y){
    if(y==0){
        throw new Error("Divide by zero exception");
    }
    return x/y;
}

try{
    console.log(add(10,0));
}catch(err){
    console.log(err.message);
}
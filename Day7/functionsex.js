function hof(a){
    return a();
}
let x = hof(function(){return "Callback function"});
console.log(x);

// let y = function(){return "callback function"};
// console.log(y());

// let users = ["Manoj" , "Asif" , "Varshith" , "Sathish" , "Tanuja"];
// console.log(users);
// users.map(function(user){console.log(user)})

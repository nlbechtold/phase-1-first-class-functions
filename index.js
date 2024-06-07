




function receivesAFunction(spy) {
   spy()
}


function returnsANamedFunction() {
    return receivesAFunction
} 
   


function returnsAnAnonymousFunction(n) {
    return function(x) {
        return n + x;
    }
   
}
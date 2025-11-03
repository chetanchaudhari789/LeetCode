/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentvalue = init;
    return{
        increment:() => ++currentvalue,
        decrement: () => --currentvalue,
        reset : ()=> (currentvalue = init)
        
    }
    
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
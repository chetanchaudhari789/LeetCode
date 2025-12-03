/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let ops = [];
    let current = 1;
    for (let num of target){
        while(current < num){
            ops.push("Push");
            ops.push("Pop");
            current++;
        }


        ops.push("Push");
        current++;

    }

    return ops;
};
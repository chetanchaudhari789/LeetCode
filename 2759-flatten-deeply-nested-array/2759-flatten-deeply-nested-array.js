/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {

    const helper = (array,currentDepth)=>{
        const result = [];

        for(const item of array){
            if(Array.isArray(item) && currentDepth < n){
                result.push(...helper(item , currentDepth + 1));
            } else {
                result.push(item);
            }
        }

        return result;
    }
    return helper(arr,0); 
};
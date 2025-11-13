/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {

    return Array.from(
        [...arr1 , ...arr2]
        .reduce((map,obj)=>{
            map.set(obj.id,{...map.get(obj.id), ...obj});
            return map;
        }, new Map())
        .values()   
    ).sort((a, b) => a.id - b.id); 
    
};
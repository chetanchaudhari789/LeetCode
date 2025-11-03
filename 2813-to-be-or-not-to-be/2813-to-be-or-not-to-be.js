/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: (othervalue)=>{
            if (val === othervalue)
            return true;
            else throw new Error ("Not Equal");
        },

        notToBe: (othervalue)=>{
            if(othervalue !== val) return true;
            else throw new Error ("Equal");
        }
    };
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
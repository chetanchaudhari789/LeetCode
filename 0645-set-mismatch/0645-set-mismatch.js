/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length;
    let duplicate  = -1;
    let missing = -1;
    
    let freq = new Array(n+1).fill (0);

    for(let num of nums){
        freq[num]++;
        if (freq[num]=== 2){
            duplicate = num;
        }
    }     




    for(let i = 1; i <= n ; i++){
        if(freq[i]=== 0){
            missing = i;
            break;
            
        }
    }

    return [duplicate , missing];
};
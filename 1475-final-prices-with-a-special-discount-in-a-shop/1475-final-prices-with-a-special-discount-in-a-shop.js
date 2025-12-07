/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {

    const n = prices.length;
    const ans = [...prices];


    for(let i = 0 ; i < n; i++ ){
        for(let j = i + 1 ; j < n ; j++){
            if(prices[j] <=  prices[i]){
                ans[i] = prices[i] - prices[j]
                break;
            }
        }
    }
    return ans;
};
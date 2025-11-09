/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
    const results = [];
    let resolvedCount = 0;
    const total = functions.length;

    // Agar empty array mil gaya
    if (total === 0) {
      resolve([]); 
      return;
    }

    functions.forEach((fn, index) => {
      // Har function ko call karte hi uska promise mil jaayega
      fn()
        .then(value => {
          results[index] = value;  // same order maintain karo
          resolvedCount++;

          // Agar sab resolve ho gaye
          if (resolvedCount === total) {
            resolve(results);
          }
        })
        .catch(err => {
          // Jaise hi koi ek reject hua, turant reject kar do
          reject(err);
        });
    });
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
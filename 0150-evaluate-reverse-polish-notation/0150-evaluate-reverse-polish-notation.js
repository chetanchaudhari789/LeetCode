/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let t of tokens) {
        if (t === "+" || t === "-" || t === "*" || t === "/") {

            let b = stack.pop();
            let a = stack.pop();

            if (t === "+") stack.push(a + b);
            else if (t === "-") stack.push(a - b);
            else if (t === "*") stack.push(a * b);
            else if (t === "/") stack.push(Math.trunc(a / b)); // truncate toward zero

        } else {
            stack.push(Number(t));
        }
    }

    return stack.pop();
};
/* You are climbing a stair case. It takes n steps to reach to the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
ex1: Input: 2 Output: 2 (1. 1 step + 1 step 2. 2 steps)
ex2: Input: 3 Output: 3 (1. 1 step + 1 step + 1 step 2. 1 step + 2 steps 3. 2 steps + 1 step) *
solution: f(n) = f(n-1) + f(n-2) /


var climbStairs = function(n) {
    let one = 1;
    let two = 1;
    let curr = 1;
    
    for(let i = 2; i <= n; i++){
     curr = one + two;
     one = two;
     two = curr;               
    }
    
    return curr;
};

console.log(climbStairs(process.argv));

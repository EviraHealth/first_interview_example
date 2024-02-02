/*

---- PROBLEM ----

Find the closest divisor

Provided a sum and a number, decide if the sum is divisible by the number.
If not, find the closest divisor to the provided number.


---- PARAMETERS AND OUTPUT ----

Parameters: sum s (int), potentialDivisor d (int).
Return: The divisor of s closest to d


---- DETAILED INSTRUCTIONS ----

- If s is divisible by d (divisible meaning s / d  = i, where i is an integer leaving no remainder), return d.
- If d is not a divisor of s, find the number n (integer) closest to d that is a divisor of s (so that s / n = i, where i is an integer leaving no remainder).

Since s is always divisible by 1 and itself, this should only be returned if there is no other divisor to s (if s is a prime). In this case, the number closest to d is the correct answer.

d = 0 should always return 1.

The function is only expected to handle and return positive numbers.

---- EXAMPLES ----

Example input: findClosestDivisor(100, 15)
Example output: 10 or 20 is equally valid

Example input: findClosestDivisor(10, 7)
Example output: 5

Example input: findClosestDivisor(10, 5)
Example output: 5

Example input: findClosestDivisor(10, 4)
Example output: 5

Example input: findClosestDivisor(10, 3)
Example output: 2

Example input: findClosestDivisor(5, 2)
Example output: 1

Example input: findClosestDivisor(902, 0)
Example output: 1

*/

function findClosestDivisor(sum, potentialDivisor) {

    // TODO: Implement solution
   
  }
  
  
  // Test run
  console.log(findClosestDivisor(100, 17)) // Expected test output: 20
  
  
  
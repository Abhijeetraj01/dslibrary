import {
    gcd,
    lcm,
    sieve,
    fastPower,
    eulerTotient
} from "../src";

console.log("GCD:");
console.log(gcd(48, 18));

console.log("\nLCM:");
console.log(lcm(12, 18));

console.log("\nPrimes up to 50:");
console.log(sieve(50));

console.log("\nFast Power:");
console.log(fastPower(2, 10));

console.log("\nEuler Totient:");
console.log(eulerTotient(9));
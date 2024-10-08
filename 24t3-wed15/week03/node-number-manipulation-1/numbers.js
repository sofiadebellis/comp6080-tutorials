const numbers = [406, 646, 199, 996, 989, 47, 55, 614, 293, 407, 287, 605, -56, 960, 832, 25, 596, 541, -577, 56, 878, 483, 681, 17, 73, 428, -757, 923, 748, 619, 117, 588, -661, -267, 571, 95, 923, 386, 507, 243, -868, -797, 344, 660, 34, 945, -424, -169, 344, 601, 277, 478, 562, 863, 887, 172, 23, 995, 999, 2, 12, 476, 755, 617, 155, 698, 91, 1, 481, 971, 371, 164, 220, 854, 590, 364, 446, 254, 980, 469, 738, 866, 297, 410, 407, 576, 893, 319, 866, 501, 939, 536, 380, 331, 438, 76, 423, 951, 459, 425 ];

console.log('Hello');

// * The sum of all numbers in that list
// * The sum of only positive numbers in that list
// * The sum of only even numbers in that list
// * The sum of all numbers above 400
// * The sum of numbers between array index 20 and 40 inclusively

let sum = 0;
let sumGreaterThanZero = 0;
let sumEven = 0;
let sumLarge = 0;
let sumRange = 0;
for (const [index, num] of numbers.entries()) {
    if (num > 0) {
        sumGreaterThanZero += num;
    }

    if (num % 2 === 0) {
        sumEven += num;
    }

    if (num > 400) {
        sumLarge += num;
    }

    if (index >= 20 && index <= 40) {
        sumRange += num;
    }
    sum += num;
}

console.log(sum);
console.log(sumGreaterThanZero);
console.log(sumEven);
console.log(sumLarge);
console.log(sumRange);
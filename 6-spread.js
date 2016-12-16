/**
 * Created by tranthanhtrung on 11/24/2016.
 */
var arr = process.argv.slice(2);
var min = Math.min(...arr);
console.log(`The minimum of [${arr}] is ${min}`);
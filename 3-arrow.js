/**
 * Created by tranthanhtrung on 11/24/2016.
 */
var inputs = process.argv.slice(2);
var arr = inputs.map(x=> x.charAt(0));
var firstCharArr = arr.reduce((x,y)=> x.concat(y));
console.log(`[${inputs}] becomes "${firstCharArr}"`);
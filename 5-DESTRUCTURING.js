/**
 * Created by tranthanhtrung on 11/24/2016.
 */
var user = process.argv.slice(2);
var result = {};
[,result.username,result.email] = user;
console.log(result);
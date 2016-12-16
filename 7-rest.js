/**
 * Created by tranthanhtrung on 11/24/2016.
 */
module.exports = function average(...arg) {
    var sum = 0;
    //arg.forEach(x=> sum+=x );
    sum = arg.reduce((x,y)=> x+y,0);
    return sum/arg.length;
}
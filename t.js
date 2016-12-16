/**
 * Created by tranthanhtrung on 11/24/2016.
 */
function log(arg, transform = x=>x) {
    console.log(transform(arg));
}

log("Hello");                       // => "Hello"
log("Hello", y => y.toUpperCase()); // => "HELLO"

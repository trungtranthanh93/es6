/**
 * Created by tranthanhtrung on 11/24/2016.
 */
var foot = {
    kick: function () {
        this.yelp = "Ouch!";
        setImmediate(()=>console.log(this.yelp));
    }
};
foot.kick();
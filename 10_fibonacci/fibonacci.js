const fibonacci = function(index) {
    if (index<0) return "OOPS";
    if (index==0) return 0;
    if (index==1) return 1;
    let a = 0, b=1;
    let s;
    for (let i=2; i<=index; i++){
        s = a+b;
        a=b;
        b=s;
    }
    return s;
};

// Do not edit below this line
module.exports = fibonacci;

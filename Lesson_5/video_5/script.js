let a = {
    a1: 'object a',
    _a3: 5,
    a2: function () {
       console.log(this.a1);
       return true;
    },
    set a3(x) {
        this._a3 = x;
    }
}
let b = {
    a1: 'bbbb',
    b1: 'object b'
}

// b.__proto__= a; //(__proto _ _ proto)
Object.setPrototypeOf(b, a); 

// console.log(a);
// console.log(b);
// console.log(b.a1);

// console.log(b.a2());
// b.a1 = 55;
// console.log(b.a1);
// console.log('-----------------------------------')
// a.a3 = 77;
// console.log(a);
// b.a3 = 88;
// console.log(b);

console.log(b.a1);
console.log(a.a1);
console.log(b.__proto__.a1);

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var object1 = {
    name: 'Divya',
    age: 20
};
var object2 = {
    id: 1313,
    male: false
};
var object3 = {
    name: 'DivyaSai',
    rollNo: 25
};
var object4 = {
    name: 'Sai',
    male: true,
    id: 1318
};
function mergedFunction(a, b, c, d) {
    var mergedObjects = __assign(__assign(__assign(__assign({}, a), b), c), d);
    console.log(mergedObjects);
}
mergedFunction(object1, object2, object3, object4);

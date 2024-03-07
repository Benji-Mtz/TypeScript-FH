"use strict";
(function () {
    var fullName = function (firstname, lastname, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstname, " ").concat(lastname || '---').toLocaleUpperCase();
        }
        else {
            return "".concat(firstname, " ").concat(lastname || '---');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();

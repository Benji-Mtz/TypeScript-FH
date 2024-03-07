"use strict";
(function () {
    var abc = function (msg) {
        throw new Error(msg);
    };
    abc('Auxilio');
})();

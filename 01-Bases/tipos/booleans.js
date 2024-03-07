"use strict";
(function () {
    var isSuperman = true;
    var isBatman = false;
    console.log({ isBatman: isBatman }); // { isBatman: isBatman }
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();

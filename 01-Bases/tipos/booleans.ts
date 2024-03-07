(() => {
    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    console.log({ isBatman }); // { isBatman: isBatman }

    isSuperman = (isBatman) ? true : false
    console.log({ isSuperman });
})()
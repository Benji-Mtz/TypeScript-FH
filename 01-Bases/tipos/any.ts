(() => {

    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    // console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0)); // Casting 1

    avenger = 150.12334;
    console.log(<number>avenger.toFixed(2)); // Casting 2



})()
(() => {

    const fullName = (firstname: string, lastname?: string, upper: boolean = false): string => {

        if (upper) {

            return `${firstname} ${lastname || '---'}`.toLocaleUpperCase();
        } else {
            return `${firstname} ${lastname || '---'}`;
        }
    }

    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})()
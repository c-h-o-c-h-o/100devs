const looper = (n) => {
    for (i=1; i<n; i++) {
        if (i*3%2 != 0) {
            console.log(i)
        }
    }
}
looper(25)
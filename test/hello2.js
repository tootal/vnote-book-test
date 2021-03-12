process.stdin.on('readable', () => {
    n = process.stdin.read();
    for (var i = 1; i <= n; i++) {
        console.log("hello world!");
        if (i == n) process.stdin.emit('end');
    }
});

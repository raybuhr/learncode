var arg_sum = 0;

for (var i = 0; i < process.argv.length; i++) {
    if (i < 2) {
        arg_sum += 0
    } else {
        arg_sum += Number(process.argv[i])
        // console.log(i, process.argv[i], arg_sum)
    }
}

console.log(arg_sum)

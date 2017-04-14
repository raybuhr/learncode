var fs = require('fs')

function count_new_lines(buffer) {
    return buffer.toString().split('\n')
}

var lines = count_new_lines(fs.readFile(process.argv[2]))

console.log(lines.length - 1)


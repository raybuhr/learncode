var fs = require('fs')

function count_new_lines(buffer) {
    return buffer.toString().split('\n').length
}

fs.readFile(process.argv[2], function doneReading(err, data) {
    if (err) {
        return console.error(err)
    }
    return console.log(count_new_lines(data) - 1)
})


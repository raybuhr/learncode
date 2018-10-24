var fs = require('fs')
var path = process.argv[2]
var ext_name = process.argv[3]

function get_fileext(list, ext) {
  if(ext.toString().indexOf('.') < 0) {
    ext = '.' + ext
  }
  for(i = 0; i < list.length; i++) {
    n = list[i].toString().indexOf(ext)
    if(n >= 0) {
      console.log(list[i].toString())
    }
  }
}

fs.readdir(path, function cb(err, list) {
  if(err) console.error(err)
  get_fileext(list, ext_name)
})

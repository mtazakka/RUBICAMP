const http = require ('http')
const fs = require('fs')

const html = fs.readFileSync('index.html', 'utf-8')

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type':'text/html'})/* 200 itu status code yang nunjukin berhasil bsa dliat d web*/
res.end(html)
}).listen(3000) /*300 itu port akses keluar masuk komputer, progremer pakai 1024++,  port80 mewakili laptop itu sendiri*/

//local host mewakili IP web --> dibuat domain biar lebih mudah, ada bebarapa aplikasi yang sudah default
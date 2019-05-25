var express = require('express')
var app = express()
var server = require('http').Server(app)
var io = require('socket.io')(server)
server.listen(8080, console.log("Server đã chạy"))

io.on('connection',(socket) => {
    console.log("Client đã kết nối: " + socket.id)
})
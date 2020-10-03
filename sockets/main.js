const io = require('../servers').io
const Orb = require('./Orb')
let orbs = []

initGame()

io.sockets.on('connect', socket => {
    socket.on('init', () => {
        socket.emit('init', {orbs})
    })
})

io.on('here', (data) => {
    console.log(data)
})


function initGame() {
    for (i = 0; i < 500; i++) {
        orbs.push(new Orb())
    }
}

module.exports = io

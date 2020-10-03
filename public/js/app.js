const wHeight =  window.innerHeight
const wWidth = window.innerWidth
let orbs = []
let canvas = document.querySelector('#the-canvas')
let context = canvas.getContext('2d')
canvas.width = wWidth
canvas.height = wHeight
let player = {}

$(window).load(function() {
    $('#loginModal').modal('show');
});

$('.name-form').submit(e => {
    e.preventDefault()
    player.name = document.querySelector('#name-input').value
    if (! player.name) return;
    $('#loginModal').modal('hide');
    $('#spawnModal').modal('show');
    document.querySelector('.player-name').innerHTML = 'Hello, ' + player.name
})

$('.start-game').click(e => {
    $('.modal').modal('hide')
    $('.hiddenOnStart').removeAttr('hidden')
    init()
})

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let brightness = 0
let up = true
c.width = document.documentElement.clientWidth
c.height = document.documentElement.clientHeight
function update() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.moveTo(0, 0)
    ctx.fillStyle = `rgba(0, 0, 255, ${brightness})`;
    ctx.beginPath()
    ctx.arc((c.width-100)/2, (c.height-100)/2, 100, 0, 2 * Math.PI)
    ctx.fill()
    if (up) {
        brightness += 1/255
    }
    else {
        brightness -= 1/255
    }
    if (brightness >= 1) {
        up = false
    }
    if (brightness <= 0) {
        up = true
    }
}
function resize() {
    c.width = document.documentElement.clientWidth
    c.height = document.documentElement.clientHeight
}

document.body.addEventListener("resize", resize);

let interval = setInterval(update, 1000/60)
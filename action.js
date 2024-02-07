let sound = new Audio("files/music.mp3")
// sound.play();
document.onkeydown = (e) => {

    if ((e.keyCode === 38) || (e.keyCode === 104)) {
        dianos = document.querySelector(".dino")
        dianos.classList.add('dianomation')
        setTimeout(() => {
            dianos.classList.remove("dianomation")
        }, 700)
        console.log("cliked", e.keyCode)
    }
}

setInterval(() => {
    dianos = document.querySelector(".dino")
    gameOver = document.querySelector(".gameover")
    obsatacle = document.querySelector(".obsatacle")
    dx = parseInt(window.getComputedStyle(dianos, null).getPropertyValue("left"))
    dy = parseInt(window.getComputedStyle(dianos, null).getPropertyValue("top"))

    ox = parseInt(window.getComputedStyle(obsatacle, null).getPropertyValue("left"))
    oy = parseInt(window.getComputedStyle(obsatacle, null).getPropertyValue("top"))
    offsetx = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);

    if ((offsetx < 200) && (offsetY < 80)) {
        gameOver.style.visibility = "visible";
        obsatacle.classList.remove("obstanomation");
    }
    console.log("checking....")

}, 100);

score = 0;
cross = true;
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


    if (e.keyCode === 102 || e.keyCode === 39) {
        dianos = document.querySelector(".dino")
        dxl = parseInt(window.getComputedStyle(dianos, null).getPropertyValue("left"))
        dianos.style.left = dxl + 112 + "px"
    }

    if (e.keyCode === 100 || e.keyCode === 37) {
        dianos = document.querySelector(".dino")
        dxl = parseInt(window.getComputedStyle(dianos, null).getPropertyValue("left"))
        dianos.style.left = dxl - 112 + "px"
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
        gameOver.classList.add("Over")
        obsatacle.classList.remove("obstanomation");
    } else if (offsetx < 200 && cross) {
        score += 1;
        scoreupdate(score)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

    }

}, 100);

function scoreupdate(score) {
    scoreCount.innerHTML = "your Score is " + score
}
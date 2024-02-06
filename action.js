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

document.onkeydown = (e) => {
    if ((e.keyCode === 38) || (e.keyCode === 104)) {
        console.log(" key used for up")
    } else if ((e.keyCode === 40) || (e.keyCode === 98)) {
        console.log("key used for down")
    } else {
        console.log("Error")
    }
}

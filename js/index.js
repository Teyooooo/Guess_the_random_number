document.querySelector("#easyMode").addEventListener( "click", ()=>{
    localStorage.setItem("mode", "easyMode")
    window.location.href = "play.html"
})

document.querySelector("#hardMode").addEventListener( "click", ()=>{
    localStorage.setItem("mode", "hardMode")
    window.location.href = "play.html"
})
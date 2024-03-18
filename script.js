const NFT = document.querySelector("#NFT")
const modal = document.querySelector(".modal")
const close = document.querySelector("#close")

NFT.addEventListener("click", function(){
    modal.classList.remove("opacity-0")
    modal.classList.remove("pointer-events-none")
})
close.addEventListener("click", function(){
    modal.classList.add("opacity-0")
    modal.classList.add("pointer-events-none")
})

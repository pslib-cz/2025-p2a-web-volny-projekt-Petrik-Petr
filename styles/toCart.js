document.addEventListener("DOMContentLoaded", () => {
    let btn = document.querySelectorAll(".cart1button")
    btn.forEach(btn=>{
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            let img = btn.querySelector(".cart1")
            btn.classList.toggle("active")
            if(btn.classList.contains("active")){
                img.src = "./styles/icons/inCart.svg"/* .. */
            }else{
                img.src = "./styles/icons/Cart.svg"
            }
        });
    })
});
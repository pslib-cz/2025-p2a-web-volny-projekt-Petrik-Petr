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
document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".cart2");
    for (const btn of document.querySelectorAll(".cart2button")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".cart3");
    for (const btn of document.querySelectorAll(".cart3button")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".cart4");
    for (const btn of document.querySelectorAll(".cart4button")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".cart5");
    for (const btn of document.querySelectorAll(".cart5button")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".cart6");
    for (const btn of document.querySelectorAll(".cart6button")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".cart7");
    for (const btn of document.querySelectorAll(".cart7button")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".cart8");
    for (const btn of document.querySelectorAll(".cart8button")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});
document.addEventListener("DOMContentLoaded", () => {
    let hamelmnts = document.querySelectorAll(".cart9");
    for (const btn of document.querySelectorAll(".cart9button")) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            for (const element of hamelmnts) {
                element.classList.toggle("active");
            }  
        });
    }
});
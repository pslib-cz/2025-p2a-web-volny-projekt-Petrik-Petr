/*document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;
    const btn = document.querySelector(".mode");

    btn.addEventListener("click", () => {

        const current = getComputedStyle(body)
            .getPropertyValue("--light-color")
            .trim();

        if(current === "rgb(225, 225, 225)"){
            body.style.setProperty("--light-color", "rgb(26, 26, 26)");
            body.style.setProperty("--dark-color", "rgb(225, 225, 225)");
            body.style.setProperty("--darkGrey-color", "rgb(138, 138, 138)");
            body.style.setProperty("--lightGrey-color", "rgb(75, 75, 75)");
            // body.style.setProperty("--modeIcon", "⏾");
            // body.style.setProperty("--mode", "Dark mode");
        }else{
            body.style.setProperty("--light-color", "rgb(225, 225, 225)");
            body.style.setProperty("--dark-color", "rgb(26, 26, 26)");
            body.style.setProperty("--darkGrey-color", "rgb(75, 75, 75)");
            body.style.setProperty("--lightGrey-color", "rgb(138, 138, 138)");
            // body.style.setProperty("--modeIcon", "☼");
            // body.style.setProperty("--mode", "Light mode");
        }
    });
});
Teď tohle nedovedu spravit...
*/

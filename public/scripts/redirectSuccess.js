let aux = 0;
let progressBar = document.querySelector(".progress-bar");

document.addEventListener("DOMContentLoaded", () => {
    let imgId = location.pathname.split("/")[2];
    let timer = setInterval(async () => {
        progressBar.style.width = `${aux++}%`;
        progressBar.ariaValueNow++;

        if (progressBar.style.width == "100%") {
            clearInterval(timer);
            location.assign(`/success?imgId=${imgId}`);
        }
    }, 50);
});

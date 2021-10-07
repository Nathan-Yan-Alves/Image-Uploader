const img = new Image();
let copyBtn = document.querySelector("#btnCopy");
let imgUrl = document.querySelector("#imageUrl");
let imgId = location.search.split("=")[1];
let imgContainer = document.querySelector(".img-container");

function changeUrl() {
    imgUrl.value = `${location.origin}/photo-${imgId}`;
}

function copyLink() {
    navigator.clipboard.writeText(imgUrl.value);
    alert("Copiado para área de transferência");
}

async function sendReq() {
    const res = await fetch(`/success/photo-${imgId}`, {
        method: "GET",
    });
    const resText = await res.text();

    img.src = resText;
    img.alt = "Uploaded image";
    img.id = "submittedImg";
    imgContainer.appendChild(img);
}

window.addEventListener("load", () => {
    sendReq();
    changeUrl();
});

copyBtn.addEventListener("click", () => {
    copyLink();
});

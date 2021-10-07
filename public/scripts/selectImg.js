const reader = new FileReader();
let inpFile = document.querySelector("#file");
let btnUpload = document.querySelector("#upload");
let imgInput = document.querySelector(".imgInput");

function uploadImg(file) {
    reader.readAsDataURL(file);

    reader.addEventListener("load", async function (e) {
        const object = { imgUrl: e.target.result };
        const res = await fetch("/api/images", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(object),
        });

        const resText = await res.text();
        location.assign(`upload/${resText}`);
    });
}

function dropImg(e) {
    e.preventDefault();
    let fileDragged = e.dataTransfer.items[0].getAsFile();

    if (fileDragged.type.includes("image/")) {
        uploadImg(fileDragged);
    } else {
        alert("Formato do arquivo inválido");
    }
}

btnUpload.addEventListener("click", () => {
    inpFile.click();
});

imgInput.addEventListener("dragenter", () => {
    imgInput.style.borderColor = "#10de28";
});

imgInput.addEventListener("dragleave", () => {
    imgInput.style.borderColor = "#97bef4";
});

imgInput.addEventListener("dragover", (e) => {
    e.preventDefault();
});

imgInput.addEventListener("drop", (e) => {
    dropImg(e);
});

inpFile.addEventListener("change", () => {
    const file = inpFile.files[0];
    uploadImg(file);
});

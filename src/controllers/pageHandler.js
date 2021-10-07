const app = require("../db/init");
const {
    getStorage,
    ref,
    uploadString,
    getMetadata,
} = require("firebase/storage");
const db = getStorage(app);

function generateId() {
    let cod = "";
    for (let i = 0; i < 6; i++) {
        cod += parseInt(Math.random() * 10);
    }
    return cod;
}

function checkId() {
    let cod = generateId();
    let refAux = ref(db, `images/${cod}.jpg`);

    getMetadata(refAux)
        .then(() => {
            checkId();
        })
        .catch(() => {
            console.log("Criando o ID...");
        });

    return { refAux, cod };
}

module.exports = {
    async upload(req, res) {
        let pathRef = checkId();
        fileUrl = req.body.imgUrl;
        uploadString(pathRef.refAux, fileUrl, "data_url").then(() => {
            console.log("File uploaded");
            res.send(pathRef.cod);
        });
    },
};

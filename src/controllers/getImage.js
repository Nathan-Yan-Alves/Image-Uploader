const { getStorage, ref, getDownloadURL } = require("firebase/storage");
const storage = getStorage();
const open = require("open");

module.exports = {
    async resImageURL(req, res) {
        const imgPath = `images/${req.params.imgId}.jpg`;
        getDownloadURL(ref(storage, imgPath)).then((url) => {
            res.send(url);
        });
    },

    async openImageUrl(req, res) {
        const imgPath = `images/${req.params.imgId}.jpg`;
        getDownloadURL(ref(storage, imgPath)).then(async (url) => {
            await open(url, { wait: true });
            res.send("<h1>Opened in a new tab</h1>");
        });
    },
};

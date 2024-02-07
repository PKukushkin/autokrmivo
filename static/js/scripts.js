document.addEventListener("DOMContentLoaded", function () {
    var showPhotoBtn = document.getElementById("showPhotoBtn");
    if (showPhotoBtn) {
        showPhotoBtn.addEventListener("click", function () {
            var infoBlock = document.getElementById("infoBlock");
            var photoContainer = document.getElementById("photoContainer");
            if (infoBlock && photoContainer) {
                infoBlock.style.display = "none";
                photoContainer.style.display = "block";
            }
        });
    }

    var closeBtn = document.getElementById("closeBtn");
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            var infoBlock = document.getElementById("infoBlock");
            var photoContainer = document.getElementById("photoContainer");
            if (infoBlock && photoContainer) {
                infoBlock.style.display = "block";
                photoContainer.style.display = "none";
            }
        });
    }

    var feedBtn = document.getElementById("feedBtn");
    if (feedBtn) {
        feedBtn.addEventListener("click", function () {
            console.log("Nakŕmiť");
        });
    }

    var soundBtn = document.getElementById("soundBtn");
    if (soundBtn) {
        soundBtn.addEventListener("click", function () {
            console.log("Zvukový signál");
        });
    }
});

var MP3 = new Audio();
MP3.src = "assets-mp3/mgs.mp3";

const toggleModeButton = document.getElementById("SWITCH");
const body = document.querySelector("body");

toggleModeButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
});

const toggleImageButton = document.getElementById("GIF");
const imageContainer = document.getElementById("image-container");

const imageUrl = "https://media.tenor.com/xlydCKGNv9kAAAAC/funny-meme.gif";

toggleImageButton.addEventListener("click", function () {
    if (imageContainer.innerHTML === "") {

        const image = document.createElement("img");
        image.src = imageUrl;
        image.classList.add("image");
        imageContainer.appendChild(image);

    } else {

        imageContainer.innerHTML = "";
    }
});

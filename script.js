document.getElementById("menuIcon").addEventListener("click", () => {
    window.location.href = "menus.html";
});

document.getElementById("menuIcon").addEventListener("click", () => {
    window.location.href = "profile.html";
});

document.getElementById("menuIcon").addEventListener("click", () => {
    window.location.href = "script.html";
});

document.getElementById("menuIcon").addEventListener("click", () => {
    window.location.href = "settings.html";
});

function openFile(event) {
    event.preventDefault();
    const input = document.getElementById("fileInput");
    if (input) {
        input.click();
    }
}

const fileInput = document.getElementById("fileInput");
const myImage = document.getElementById("myImage");
if (fileInput && myImage) {
    fileInput.addEventListener("change", function (e) {
        const file = e.target.files && e.target.files[0];
        if (!file || !file.type.startsWith("image/")) {
            return;
        }
        const imageURL = URL.createObjectURL(file);
        myImage.src = imageURL;
        myImage.alt = file.name || "Profile photo";
    });
}

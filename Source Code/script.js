document.getElementById("captcha").addEventListener("change", function() {
    const verifyButton = document.getElementById("verifyBtn");
    verifyButton.disabled = !this.checked;
});

document.getElementById("verifyBtn").addEventListener("click", function() {
    document.title = "Rickrolled LOL";

    window.history.pushState({}, '', '/rickrolled');
    
    const videoUrl = "https://github.com/MeLegend5555/Verification/blob/main/src/rickroll.mp4?raw=true";

    const videoPlayer = document.createElement('video');
    videoPlayer.src = videoUrl;
    videoPlayer.style.position = "fixed";
    videoPlayer.style.top = "0";
    videoPlayer.style.left = "0";
    videoPlayer.style.width = "100%";
    videoPlayer.style.height = "100%";
    videoPlayer.style.zIndex = "9999";
    videoPlayer.autoplay = true;
    videoPlayer.controls = false;

    document.body.appendChild(videoPlayer);

    const creatorInfo = document.createElement('div');
    creatorInfo.style.position = "fixed";
    creatorInfo.style.bottom = "20px";
    creatorInfo.style.left = "20px";
    creatorInfo.style.right = "20px";
    creatorInfo.style.display = "flex";
    creatorInfo.style.alignItems = "center";
    creatorInfo.style.justifyContent = "space-between";
    creatorInfo.style.color = "white";
    creatorInfo.style.fontSize = "18px";
    creatorInfo.style.zIndex = "10000";
    creatorInfo.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    creatorInfo.style.padding = "10px";
    creatorInfo.style.borderRadius = "10px";

    const profileContainer = document.createElement('div');
    profileContainer.style.display = "flex";
    profileContainer.style.alignItems = "center";

    const profileImage = document.createElement('img');
    profileImage.src = "https://avatars.githubusercontent.com/u/183177265?v=4";
    profileImage.style.width = "50px";
    profileImage.style.height = "50px";
    profileImage.style.borderRadius = "50%";
    profileImage.style.marginRight = "10px";

    const creatorText = document.createElement('a');
    creatorText.href = "https://github.com/MeLegend5555";
    creatorText.textContent = "Made by: ";
    creatorText.style.color = "white";
    creatorText.style.textDecoration = "none";
    
    const creatorLink = document.createElement('span');
    creatorLink.textContent = "MeLegend5555";
    creatorLink.style.color = "#00f"; // Hyperlink color
    creatorLink.style.cursor = "pointer";
    creatorLink.onclick = () => window.location.href = "https://github.com/MeLegend5555";

    creatorText.appendChild(creatorLink);
    profileContainer.appendChild(profileImage);
    profileContainer.appendChild(creatorText);

    const rickrolledText = document.createElement('div');
    rickrolledText.textContent = "You got rickrolled LMAO 💀";
    rickrolledText.style.fontStyle = "italic";

    creatorInfo.appendChild(profileContainer);
    creatorInfo.appendChild(rickrolledText);
    document.body.appendChild(creatorInfo);

    if (videoPlayer.requestFullscreen) {
        videoPlayer.requestFullscreen();
    } else if (videoPlayer.mozRequestFullScreen) {
        videoPlayer.mozRequestFullScreen();
    } else if (videoPlayer.webkitRequestFullscreen) { 
        videoPlayer.webkitRequestFullscreen();
    } else if (videoPlayer.msRequestFullscreen) { 
        videoPlayer.msRequestFullscreen();
    }

    videoPlayer.onfullscreenchange = function () {
        if (!document.fullscreenElement) {
            creatorInfo.style.display = "flex";
        } else {
            creatorInfo.style.display = "none";
        }
    };
});

document.getElementById("mode").addEventListener("change", function() {
    const mode = this.value + "-mode";
    document.body.className = mode;
    localStorage.setItem("theme", mode);
});

window.addEventListener("load", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.className = savedTheme;
        document.getElementById("mode").value = savedTheme.includes("dark") ? "dark" : "light";
    }
});

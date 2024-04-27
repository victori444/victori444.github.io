var allProjects = "allProjects";
var websites = "websites";
var videoGames = "videoGames";
 
function changeProjDisplay(projectType) {
    console.log("filter clicked");
    if (projectType === "allProjects") {
        document.getElementById("desktopEmulator").style.display = "flex";
        document.getElementById("bobbingBats").style.display = "flex";
        document.getElementById("totallyMari").style.display = "flex";
        document.getElementById("skadoosh").style.display = "flex";
    }
    else if (projectType === "websites") {
        document.getElementById("desktopEmulator").style.display = "flex";
        document.getElementById("bobbingBats").style.display = "none";
        document.getElementById("totallyMari").style.display = "flex";
        document.getElementById("skadoosh").style.display = "flex";
    }
    else if (projectType === "videoGames") {
        document.getElementById("desktopEmulator").style.display = "none";
        document.getElementById("bobbingBats").style.display = "flex";
        document.getElementById("totallyMari").style.display = "none";
        document.getElementById("skadoosh").style.display = "none";
    }
}
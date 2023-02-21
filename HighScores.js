var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");
var clear = document.querySelector("#clear");

clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
})
let allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores != null) {
  
    for (var i = 0; i < allScores.length; i++) {
        
        var createLi = document.createElement("li");
        createLi.setAttribute("id", "createLi");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});



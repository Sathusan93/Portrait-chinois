document.addEventListener("DOMContentLoaded", function () {
    var resultatsSection = document.getElementById("resultats");
    // analogie html
    data.forEach(function (f) {
      var blocAna = document.createElement("div");
      blocAna.className = "blocAna";
  
      blocAna.innerHTML =
        '<section>' +
        '<h2 class="si-jetais">' +
        "Si j'étais " + f.analogie + ", je serais " +
        f.valeurAnalogie +
        '</h2>' +
        '<div class="description">' +
        '<p class="text">' +
        f.description +
        '</p>' +
        '<img class="images" src="' + f.image + '" alt="">' +
        '</div>' +
        '</section>';
  
      resultatsSection.appendChild(blocAna);
    });
});
document.querySelector("#analogie").addEventListener('keyup',function(e){console.log("Champ modifié");
document.querySelector("#analogiesuggerée").innerHTML = document.querySelector("#analogie").value;
})
document.querySelector("#valeurAnalogie").addEventListener('keyup',function(e){console.log("Champ modifié");
document.querySelector("#valeurnalogiesuggerée").innerHTML = document.querySelector("#valeurAnalogie").value;
})
// Mention
document.querySelector('.mention').addEventListener('click',function(e){
  if (this.classList.contains('popup-invisble')){
    this.classList.remove('popup-invisible');
    this.classList.add('popup-visible');
  } else {
    this.classList.remove('popup-visible');
    this.classList.add('popup-invisible');
  }
})

//navigation entre les analogie grace au menu

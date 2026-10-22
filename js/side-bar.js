const closeButton = document.getElementById("sideClose");

closeButton.addEventListener("click", function(){
    document.querySelector(".vertical-marquee").remove();
    closeButton.remove();
    }
);
function toggleCard() {

    const card = document.getElementById("profileCard");

    if (card.style.display === "block") {

        card.style.display = "none";

    } else {

        card.style.display = "block";
    }

}

document.addEventListener("click", function(event) {

    const card = document.getElementById("profileCard");

    const creator = document.querySelector(".creator-name");

    if (!creator.contains(event.target) &&
        !card.contains(event.target)) {

        card.style.display = "none";
    }

});
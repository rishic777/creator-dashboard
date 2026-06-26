const creators = document.querySelectorAll(".creator");

creators.forEach((creator) => {

    const card = creator.querySelector(".hover-card");

    creator.addEventListener("mouseenter", () => {

        card.style.display = "block";

        setTimeout(() => {

            card.style.opacity = "1";

        }, 10);

    });

    creator.addEventListener("mouseleave", () => {

        card.style.opacity = "0";

        setTimeout(() => {

            card.style.display = "none";

        }, 250);

    });

});
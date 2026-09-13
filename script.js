//your JS code here. If required.

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {

    square.addEventListener("mouseenter", () => {

        squares.forEach((otherSquare) => {

            if (otherSquare !== square) {
                otherSquare.style.backgroundColor = "#6F4E37";
            } else {
                otherSquare.style.backgroundColor = "#E6E6FA";
            }

        });

    });

    square.addEventListener("mouseleave", () => {

        squares.forEach((otherSquare) => {
            otherSquare.style.backgroundColor = "#E6E6FA";
        });

    });

});
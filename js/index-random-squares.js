const animations = {
    startup: [
        "startup-flicker-1-square",
        "startup-flicker-2-square",
        "startup-flicker-3-square"
    ],

    restart: [
        "restart-flicker-1-square",
        "restart-flicker-2-square",
        "restart-flicker-3-square",
        "restart-flicker-4-square",
        "restart-flicker-5-square",
        "restart-flicker-6-square"
    ]
};


function randomiseSquares(type) {
    document.querySelectorAll(`.random-${type}`).forEach(square => {

        square.className = `random-${type} ${animations[type][Math.floor(Math.random() * animations[type].length)]}`;
    });
}

randomiseSquares("startup");

randomiseSquares("restart");
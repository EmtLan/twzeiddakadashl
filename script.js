window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = "block";
        backToTopButton.style.opacity = "1";
    } else {
        backToTopButton.style.display = "none";
        backToTopButton.style.opacity = "0";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    const shapes = ['triangle', 'square'];
    const numShapes = Math.floor(Math.random() * (8 - 4 + 1)) + 4;

    for (let i = 0; i < numShapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape', shapes[Math.floor(Math.random() * shapes.length)]);
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.animation = `float ${Math.random() * 5 + 5}s ease-in-out infinite`;

        document.body.appendChild(shape);
    }
});
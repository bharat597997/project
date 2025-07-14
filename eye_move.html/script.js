document.querySelector('body').addEventListener("mousemove", (e) => {
    eyeball(e);
});

function eyeball(e) {
    const eyes = document.querySelectorAll('.eyes');
    eyes.forEach(function(eye) {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(e.clientX - x, e.clientY - y);
        let rotation = radian * (180 / Math.PI) * -1 + 270;
        eye.style.transform = "rotate(" + rotation + "deg)";
    });
}

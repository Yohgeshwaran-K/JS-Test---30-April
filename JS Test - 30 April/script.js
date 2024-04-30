var dark = false;

function color(color) {
    document.getElementById('display').style.backgroundColor = color;
}

function toggle() {
    dark = !dark;
    var body = document.body;
    display.style.backgroundColor = dark ? 'white' : 'black';
    body.style.backgroundColor = dark ? 'black' : 'white';
    body.style.color = dark ? 'white' : 'black';
}


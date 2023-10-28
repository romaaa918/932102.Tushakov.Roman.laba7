function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createSquare() {
    var count = document.getElementById('countObj').value; 
    var color = getRandomColor();

    for (var i = 0; i < count; i++) {
        var size = Math.floor(Math.random() * (301 - 50)) + 50 + 'px';
        var topIndent = Math.floor(Math.random() * 800 + 50) + 'px';
        var leftIndent = Math.floor(Math.random() * 1000 + 50) + 'px';

        const square = document.createElement('div');
        square.style.backgroundColor = color;
        square.style.width = size;
        square.style.height = size;
        square.style.opacity = '0.9';
        square.style.position = 'absolute';
        square.style.top = topIndent;
        square.style.left = leftIndent;
        square.style.border = '1px solid black'
        
        square.onclick = function Click() {
            square.style.backgroundColor = 'yellow';
        } 

        square.ondblclick = function dbllick() {
            square.remove();
        }

        const box = document.getElementById('main');
        box.appendChild(square);
    } 
}

function createTriangle() {
    var count = document.getElementById('countObj').value; 
    var color = getRandomColor();

    for (var i = 0; i < count; i++) {
        var size = Math.floor(Math.random() * (301 - 50)) + 50 + 'px';
        var topIndent = Math.floor(Math.random() * 500 + 50) + 'px';
        var leftIndent = Math.floor(Math.random() * 1400 + 50) + 'px';

        const triangle = document.createElement('div');
        triangle.style.opacity = '0.9';
        triangle.style.position = 'absolute';
        triangle.style.top = topIndent;
        triangle.style.left = leftIndent;
        triangle.style.border = size + ' solid transparent';
        triangle.style.borderBottom = size + ' solid ' + color;

        triangle.onclick = function Click() {
            triangle.style.borderBottom = size + ' solid ' + 'yellow';
        } 

        triangle.ondblclick = function dbllick() {
            triangle.remove();
        }

        const box = document.getElementById('main');
        box.appendChild(triangle);
    } 
}

function createCircle() {
    var count = document.getElementById('countObj').value; 
    var color = getRandomColor();

    for (var i = 0; i < count; i++) {
        var size = Math.floor(Math.random() * (301 - 50)) + 50 + 'px';
        var topIndent = Math.floor(Math.random() * 600 + 50) + 'px';
        var leftIndent = Math.floor(Math.random() * 1500 + 50) + 'px';

        const circle = document.createElement('div');
        circle.style.backgroundColor = color;
        circle.style.width = size;
        circle.style.height = size;
        circle.style.borderRadius = '200px';
        circle.style.opacity = '0.9';
        circle.style.position = 'absolute';
        circle.style.top = topIndent;
        circle.style.left = leftIndent;
        circle.style.border = '1px solid black'

        circle.onclick = function Click() {
            circle.style.backgroundColor = 'yellow';
        } 

        circle.ondblclick = function dbllick() {
            circle.remove();
        }

        const box = document.getElementById('main');
        box.appendChild(circle);
    } 
}
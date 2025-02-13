// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatJumping();
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?';
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

function displayKiss() {
    var imageContainer = document.getElementById('image-container');
    var kissImage = new Image();
    kissImage.src = '/mnt/data/kiss.gif';
    kissImage.alt = 'Kiss';
    kissImage.onload = function() {
        imageContainer.appendChild(kissImage);
    };
}

function displayCatJumping() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catJumpingImage = new Image();
    catJumpingImage.src = '/mnt/data/cat jumping.gif';
    catJumpingImage.alt = 'Cat Jumping';
    catJumpingImage.onload = function() {
        imageContainer.appendChild(catJumpingImage);
        document.getElementById('options').style.display = 'none';
    };
}

displayKiss();

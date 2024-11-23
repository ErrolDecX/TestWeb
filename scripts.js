document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    var playButton = document.createElement('button');
    playButton.textContent = 'Click to Start Music';
    playButton.style.position = 'absolute';
    playButton.style.top = '50%';
    playButton.style.left = '50%';
    playButton.style.transform = 'translate(-50%, -50%)';
    playButton.style.padding = '10px 20px';
    playButton.style.backgroundColor = '#333';
    playButton.style.color = '#fff';
    playButton.style.border = 'none';
    playButton.style.borderRadius = '5px';
    playButton.style.cursor = 'pointer';
    document.body.appendChild(playButton);

    playButton.addEventListener('click', function() {
        audio.play().catch(function(err) {
            console.log('Failed to play audio:', err);
        });
        playButton.style.display = 'none'; // Hide the button after clicking
    });
});

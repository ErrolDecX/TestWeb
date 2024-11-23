document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');

    function playAudio() {
        audio.play().catch(function(err) {
            console.log('Failed to play audio:', err);
        });
        document.removeEventListener('click', playAudio);
    }

    // Add event listener to play audio on any click
    document.addEventListener('click', playAudio);

    // Try to play the audio automatically
    playAudio();
});


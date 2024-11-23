document.addEventListener('DOMContentLoaded', function() {
    var introScreen = document.getElementById('intro-screen');
    var mainContent = document.getElementById('main-content');
    var audio = document.getElementById('background-music');

    function startExperience() {
        introScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        audio.play().catch(function(err) {
            console.log('Failed to play audio:', err);
        });
    }

    // Start the experience on click
    introScreen.addEventListener('click', startExperience);
});

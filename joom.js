
        const video = document.getElementById('videoPlayer');
        const audio = document.getElementById('audioPlayer');

        function playMedia() {
            video.play();
            audio.play();
        }

        function pauseMedia() {
            video.pause();
            audio.pause();
        }

        function skipMedia(seconds) {
            video.currentTime += seconds;
            audio.currentTime += seconds;
        }

        function rewindMedia(seconds) {
            video.currentTime -= seconds;
            audio.currentTime -= seconds;
        }

        function toggleMute() {
            video.muted = !video.muted;
            audio.muted = !audio.muted;
        }

        // Tab navigation
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Tab') {
                event.preventDefault();
                video.focus();
            }
        });
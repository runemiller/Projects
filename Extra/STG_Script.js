let currentSong;
let score = 0;
let highScore = 0;
let highScorer = "";
let revealedArtist = false;
let revealedAlbum = false;

function getRandomSong() {
    fetch('https://mi-linux.wlv.ac.uk/~2112834/PersonalProjects/backend.php')
        .then(response => response.json())
        .then(data => {
            currentSong = data;
            const title = data.title;
            const artist = data.artist;
            const album = data.album;
            const titleArray = title.split(' ').map(word => word[0]);
            const hint = `Hint: ${titleArray.join(' ')}`;

            document.getElementById('result').innerHTML = hint;
            document.getElementById('artistValue').innerText = artist;
            document.getElementById('albumValue').innerText = album;
            document.getElementById('feedback').innerText = '';
            document.getElementById('guessInput').value = '';
            document.getElementById('artist').classList.add('hidden');
            document.getElementById('album').classList.add('hidden');
            revealedArtist = false;
            revealedAlbum = false;
        })
        .catch(error => console.error('Error:', error));
}

function checkGuess() {
    const userGuess = document.getElementById('guessInput').value.toLowerCase().trim();
    const correctTitle = currentSong.title.toLowerCase().trim();
    const artistSpan = document.getElementById('artistSpan');
    const albumSpan = document.getElementById('albumSpan');

    document.getElementById('result').innerHTML = `Hint: ${currentSong.title}`;
    document.getElementById('artist').classList.remove('hidden');
    document.getElementById('album').classList.remove('hidden');

    if (userGuess === correctTitle) {
        if (revealedArtist && revealedAlbum) {
            score += 1;
        } 
        else if (revealedArtist || revealedAlbum) {
            score += 3;
        } 
        else {
            score += 5;
        }
        document.getElementById('feedback').innerText = 'Correct! You guessed the song!';
    } 
    else {
        document.getElementById('feedback').innerText = 'Incorrect. Try again!';
        saveToDatabase(document.getElementById('username').value, score);
        score = 0;
    }

    document.getElementById('score').innerText = `Score: ${score}`;

    if (score > highScore) {
        highScore = score;
    }
}

function reveal(type) {
    if (type === 'artist') {
        document.getElementById('artist').classList.remove('hidden');
        revealedArtist = true;
    } 
    else if (type === 'album') {
        document.getElementById('album').classList.remove('hidden');
        revealedAlbum = true;
    }
}

function saveToDatabase(username, score) {
    fetch('https://mi-linux.wlv.ac.uk/~2112834/PersonalProjects/backend_save.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&score=${score}`,
    })
        .then(response => response.json())
        .then(data => {
            highScore = data.highScore;
            highScorer = data.highScorer;
            document.getElementById('highScore').innerText = `High Score: ${highScore}`;
            document.getElementById('highScorer').innerText = `High Scorer: ${highScorer}`;
        })
        .catch(error => console.error('Error saving to database:', error));
}
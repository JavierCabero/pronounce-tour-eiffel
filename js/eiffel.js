/***********************
* Copyright (c) 2016   *
* Javier Cabero Guerra *
***********************/

var tour_eiffel_sounds  = undefined;
var french_song         = undefined;
var french_song_playing = false;
var french_song_button  = undefined;

function init() {

	tour_eiffel_sounds = [];

	// check folder
	var sound_count = 13;

	for(i=1; i<=sound_count; i++) 
	tour_eiffel_sounds.push(
		new Howl({
	    	urls: ['audio/toureiffel' + String(i) + '.mp3'],
	    })
    );

    french_song = new Howl({
    	urls: ['audio/valsedamelie.mp3'],
    	volume: 0.6,
    	onend: function() { french_song.stop(); french_song_button.src = 'img/speaker_off.png';  }
    });

	french_song_button = document.getElementById("french-song-button");
}

window.onload = init();

function playTourEiffel() {
	if (tour_eiffel_sounds) 
		tour_eiffel_sounds[Math.floor(Math.random()*tour_eiffel_sounds.length)].play();
}

function toggleFrenchSong() {
	if (french_song_playing) {
		french_song_playing = false;
		french_song.stop();
		french_song_button.src = 'img/speaker_off.png'
	} else {
		french_song_playing = true;
		french_song.play();
		french_song_button.src = 'img/speaker_on.png'
	}
}


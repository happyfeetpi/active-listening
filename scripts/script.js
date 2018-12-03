var playing = false;
var currentSongIndex = 0;
var muted = false;
var songList = [
	[new Audio('audio/test/song_this.mp3'), "This Will Be", "Natalie Cole", "Inseperable", "images/test/album_inseperable.jpg"],
	[new Audio('audio/test/song_blue.mp3'), "Blue Christmas", "Elvis Presly", "Blue Christmas", "images/test/album_blue.jpg"],
	[new Audio('audio/test/song_aint.mp3'), "Aint That A Kick In The Head", "Dean Martin", "The Capitol Years", "images/test/album_capitol.jpg"]
];

function playPause() {
	if(playing) {
		document.getElementById("play-pause").src = "images/play.svg";
		songList[currentSongIndex][0].pause();
		playing = false;
	} else {
		document.getElementById("play-pause").src = "images/pause.svg";
		songList[currentSongIndex][0].play();
		playing = true;
	}
}

function nextTrack() {
	songList[currentSongIndex][0].pause();
	if(currentSongIndex < songList.length-1) {
		currentSongIndex ++;
	} else {
		currentSongIndex = 0;
	}
	songList[currentSongIndex][0].currentTime = 0;
	document.getElementById("current-song-title").innerHTML = songList[currentSongIndex][1];
	document.getElementById("current-song-artist").innerHTML = songList[currentSongIndex][2];
	document.getElementById("current-song-album").innerHTML = songList[currentSongIndex][3];
	document.getElementById("current-song-album-cover").src = songList[currentSongIndex][4];
	changeVolume();
	if(playing) {
		songList[currentSongIndex][0].play();
	}
}

function lastTrack() {
	if(songList[currentSongIndex][0].currentTime > 5) {
		songList[currentSongIndex][0].currentTime = 0;
	} else {
		songList[currentSongIndex][0].pause();
		if(currentSongIndex > 0) {
			currentSongIndex --;
		} else {
			currentSongIndex = songList.length-1;
		}
		songList[currentSongIndex][0].currentTime = 0;
		document.getElementById("current-song-title").innerHTML = songList[currentSongIndex][1];
		document.getElementById("current-song-artist").innerHTML = songList[currentSongIndex][2];
		document.getElementById("current-song-album").innerHTML = songList[currentSongIndex][3];
		document.getElementById("current-song-album-cover").src = songList[currentSongIndex][4];
		changeVolume();
		if(playing) {
			songList[currentSongIndex][0].play();
		}
	}
}

function changeVolume(){
	if(muted) {
		document.getElementById("mute").src = "images/volume_off.svg"
		songList[currentSongIndex][0].volume = 0;
	} else {
		var newVolume = document.getElementById("volume-slider").value/100;
		if(newVolume > 0.66) {
			document.getElementById("mute").src = "images/volume_high.svg"
		} else if(newVolume > 0.33) {
			document.getElementById("mute").src = "images/volume_mid.svg"
		} else if(newVolume > 0) {
			document.getElementById("mute").src = "images/volume_low.svg"
		} else {
			document.getElementById("mute").src = "images/volume_off.svg"
		}
		songList[currentSongIndex][0].volume = newVolume;
	}
}

function changeMute() {
	if(muted) {
		var newVolume = document.getElementById("volume-slider").value/100;
		if(newVolume > 0.66) {
			document.getElementById("mute").src = "images/volume_high.svg"
		} else if(newVolume > 0.33) {
			document.getElementById("mute").src = "images/volume_mid.svg"
		} else if(newVolume > 0) {
			document.getElementById("mute").src = "images/volume_low.svg"
		} else {
			document.getElementById("mute").src = "images/volume_off.svg"
		}
		songList[currentSongIndex][0].volume = newVolume;
		muted = false;
	} else {
		document.getElementById("mute").src = "images/volume_off.svg"
		songList[currentSongIndex][0].volume = 0;
		muted = true;
	}
}

function changeStatistic(statisticIndex) {
	document.getElementById("statistic-selector-0").style.backgroundColor = "transparent";
	document.getElementById("statistic-selector-1").style.backgroundColor = "transparent";
	document.getElementById("statistic-selector-2").style.backgroundColor = "transparent";
	document.getElementById("statistic-selector-3").style.backgroundColor = "transparent";
	document.getElementById("statistic-selector-" + statisticIndex).style.backgroundColor = "red";
}
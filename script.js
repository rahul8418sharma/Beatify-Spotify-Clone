const songs = [
    {
      name: "Aaja We Mahiya",
      artist: "Artist 1",
      path: "assets/song1.mp3",
      cover: "assets/cover1.jpg"
    },
    {
      name: "Sajna Ve",
      artist: "Artist 2",
      path: "assets/song2.mp3",
      cover: "assets/cover2.jpg"
    }
  ];
  
  const songList = document.getElementById("song-list");
  const audioPlayer = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-btn");
  const progressBar = document.getElementById("progress-bar");
  const songNameDisplay = document.getElementById("song-name");
  const volume = document.getElementById("volume");
  const themeSwitch = document.getElementById("theme-switch");
  
  // Render Songs
  songs.forEach((song, index) => {
    const songDiv = document.createElement("div");
    songDiv.className = "song";
    songDiv.innerHTML = `
      <img src="${song.cover}" alt="Cover">
      <div class="song-details">
        <strong>${song.name}</strong>
        <small>${song.artist}</small>
      </div>
    `;
    songDiv.onclick = () => {
      audioPlayer.src = song.path;
      audioPlayer.play();
      songNameDisplay.textContent = `Now Playing: ${song.name}`;
      playBtn.textContent = "⏸";
    };
    songList.appendChild(songDiv);
  });
  
  // Play/Pause
  playBtn.onclick = () => {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playBtn.textContent = "⏸";
    } else {
      audioPlayer.pause();
      playBtn.textContent = "⏯";
    }
  };
  
  // Volume
  volume.oninput = () => {
    audioPlayer.volume = volume.value / 100;
  };
  
  // Progress
  audioPlayer.ontimeupdate = () => {
    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = percent || 0;
  };
  
  // Day/Night Mode
  themeSwitch.addEventListener("change", () => {
    const current = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  });
  
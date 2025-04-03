<script>
  import { onMount } from 'svelte';
  import { base } from '$app/paths';  // Import the base path
  let audio = null;
  let currentTrack = 0;
  let tracks = [
    { name: "01 - backroom labyrinth", src: `/audio/backroom_labyrinth.ogg` },
    { name: "02 - korobeiniki", src: `/audio/korobeiniki.ogg` },
    { name: "03 - watasi wa ame", src: `/audio/watasi_wa_ame.ogg` },
    { name: "04 - lhs rld installer #10", src: `/audio/lhs_rld_installer_10.ogg` }
  ];

  let isPlaying = false;
  let progress = 0;
  let currentTime = 0;
  let duration = 0;

  // Helper to format time as MM:SS
  function formatTime(time) {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${("0" + seconds).slice(-2)}`;
  }

  // Ensure audio code only runs in the browser
  onMount(() => {
     if (typeof window === "undefined") return; //prevent ssr issue
    audio = new Audio(tracks[currentTrack].src);
    
    // Update time and progress when audio plays
    audio.ontimeupdate = () => {
      currentTime = audio.currentTime;
      duration = audio.duration || 0;
      progress = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    };

    // Automatically play the next track when one ends
    audio.onended = () => {
      currentTrack = (currentTrack + 1) % tracks.length;
      audio.src = tracks[currentTrack].src;
      audio.play();
    };
  });

  function togglePlayPause() {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
  }

  function changeTime(event) {
    if (!audio || !audio.duration) return;
    const value = event.target.value;
    audio.currentTime = (value / 100) * audio.duration;
  }

  function playTrack(index) {
    audio.pause();
    if (!audio) return;
    currentTrack = index;
    audio.src = tracks[currentTrack].src;
    audio.play();
    isPlaying = true;
  }
</script>

<head>
  <title>nuke3 - music</title>
</head>

<main class="container">
  <h1>nuke3 music</h1>

  <h2>playlist</h2>
  <ul>
    {#each tracks as track, index}
        <li>
	<a on:click|preventDefault={() => playTrack(index)}>
          {track.name}
        </a>
	</li>
    {/each}
	</ul>
  <p>these songs belong to their respective artists and this is (hopefully) not violating tos as it is merely a playlist.</p>

  <h2>now playing</h2>
  <p>{tracks[currentTrack].name}</p>
  <p>
    {formatTime(currentTime)}/{formatTime(duration)}
  </p>

  <input
    type="range"
    min="0"
    max="100"
    value={progress}
    on:input={changeTime}
  />

  <button on:click={togglePlayPause}>
    {isPlaying ? "Pause" : "Play"}
  </button>
  <button class="secondary" on:click={() => {
    if (audio) {
      audio.pause();
      isPlaying = false;
    }
  }}>Discrete Pause</button>
</main>

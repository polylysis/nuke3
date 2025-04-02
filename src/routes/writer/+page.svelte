<script>
  import { onMount } from "svelte";
  
  // Reactive variable to hold the content of the textarea
  let content = "";

  // Function to export the content as a .txt file
  function exportContent() {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    // Set the download attribute to trigger the file download
    link.href = url;
    link.download = "your_shit.txt"; // The name of the exported file
    link.click(); // Simulate a click to download the file
    URL.revokeObjectURL(url); // Clean up the URL object
  }
</script>

<head>
  <title>nuke3 - writer</title>
</head>

<main class="container">
  <h1>nuke3 writer</h1>
  <h2>about</h2>
  <p>Write your stuff and save it as a .txt file. No fucking autosaves, its literally just a notepad.</p>

  <h2>Writer</h2>

  <!-- Textarea for writing content -->
  <textarea
    name="writer"
    placeholder="Write your shit here"
    aria-label="writer"
    bind:value={content}
    ></textarea>

  <!-- Button to trigger the export function -->
  <button on:click={exportContent}>export</button>
</main>


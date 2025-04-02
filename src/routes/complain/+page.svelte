<script>
  // Reactive variable to hold the user's complaint
  let complainText = "";
  let submittedComplaint = null; // Holds the submitted complaint to display as blockquote

  // Function to handle sending the complaint
  function sendComplaint() {
    if (complainText.trim() !== "") {
      // Save the complaint to be displayed as a blockquote
      submittedComplaint = complainText;

      // Reset the complain text after sending
      complainText = "";
    }
  }
    // Function to handle keydown events
  function handleKeydown(event) {
    if (event.key === "Enter") {
      sendComplaint(); // Send the complaint if Enter is pressed
    }
  }
</script>

<head>
  <title>nuke3 - complain</title>
</head>

<main class="container">
  <h1>nuke3 complain</h1>
  <h2>about</h2>
  <p>send your complaints about this app, about life, or both into the complain hole where someone or something will read your stuff... never.</p>

  <h2>complain here</h2>
  <!-- Display the complaint as a blockquote if submitted -->
  {#if submittedComplaint}
    <h3>Your complaint has been read by the hole creature:</h3>
    <blockquote>
      “{submittedComplaint}”?... i am sorry... i dont have the mental capacity to understand your words, but if i did, i would try my best to help.
      <footer>
        <cite>— the hole creature</cite>
      </footer>
    </blockquote>
  {/if}
<!-- Textarea to type a complaint -->
  <textarea
    name="complain"
    placeholder="No one really cares actually"
    aria-label="complain"
    bind:value={complainText}
    on:keydown={handleKeydown}
    ></textarea>

  <!-- Button to send the complaint -->
  <button on:click={sendComplaint}>Send</button>
</main>

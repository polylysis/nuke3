<script>
  import { onMount } from "svelte";

  // Function to get the cookie value by its name
  function getCookie(name) {
    const matches = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return matches ? decodeURIComponent(matches[2]) : null;
  }

  // Function to set a cookie with a specified name, value, and expiration time (in days)
  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
  }

  // Reactive variable to hold the list of tasks
  let tasks = [];
  let newTask = ""; // Holds the value of the input field

  // Load tasks from cookies on mount
  onMount(() => {
    const storedTasks = getCookie("tasks");
    if (storedTasks) {
      tasks = JSON.parse(storedTasks); // Parse the JSON string back into an array
    }
  });

  // Function to add a new task to the list
  function addTask() {
    if (newTask.trim() !== "") {
      tasks = [...tasks, newTask]; // Add the new task to the array
      newTask = ""; // Clear the input field
      updateTasksCookie(); // Update the cookie with the new task list
    }
  }

  // Function to remove the last task from the list
  function removeTask() {
    tasks = tasks.slice(0, -1); // Remove the last task
    updateTasksCookie(); // Update the cookie after removing a task
  }

  // Function to handle the enter key press
  function handleKeydown(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  // Function to update the tasks cookie whenever the task list changes
  function updateTasksCookie() {
    setCookie("tasks", JSON.stringify(tasks), 7); // Store the task list as a JSON string in a cookie for 7 days
  }
</script>

<head>
  <title>nuke3 - todo</title>
</head>

<main class="container">
  <h1>nuke3 todo</h1>
  <h2>about</h2>
  <p>small todo list app</p>

  <h2>todo list</h2>
  <ul>
    {#each tasks as task, index}
      <li>{task}</li>
    {/each}
  </ul>

  <!-- Input for new task -->
  <input
    type="text"
    name="text"
    placeholder="add a task here"
    aria-label="Text"
    bind:value={newTask}
    on:keydown={handleKeydown} 
  />

  <!-- Buttons for adding and removing tasks -->
  <button on:click={addTask}>add</button>
  <button class="secondary" on:click={removeTask}>rem</button>
</main>


document.addEventListener("DOMContentLoaded", function () {
    const promptText = document.getElementById("prompt").innerText.trim();
    const userInput = document.getElementById("user-input");
    const errorMessage = document.getElementById("error-message");
  
    // Display the initial prompt
    updatePromptDisplay(promptText);
  
    // Attach an event listener to the user input area to detect changes
    userInput.addEventListener("input", function () {
      const userText = userInput.value.trim();
      const errors = getErrors(promptText, userText);
      displayErrors(errors);
  
      // Update the prompt display with the user's input
      updatePromptDisplay(userText);
    });
  
    function getErrors(promptText, userText) {
      const promptWords = promptText.split(" ");
      const userWords = userText.split(" ");
  
      let errors = 0;
      let errorPositions = [];
  
      for (let i = 0; i < promptWords.length; i++) {
        if (promptWords[i] !== userWords[i]) {
          errors++;
          errorPositions.push(i);
        }
      }
  
      return { errors, errorPositions };
    }
  
    function displayErrors({ errors, errorPositions }) {
      if (errors === 0) {
        errorMessage.innerText = "";
      } else {
        const errorString = errorPositions.map(pos => `(${pos + 1})`).join(", ");
        errorMessage.innerText = `Errors at word position(s): ${errorString}`;
      }
    }
  
    // Function to update the prompt display
    function updatePromptDisplay(text) {
      // Replace line breaks with <br> tags for proper formatting
      const formattedText = text.replace(/\n/g, "<br>");
      document.getElementById("prompt").innerHTML = formattedText;
    }
  });
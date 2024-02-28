// JavaScript to handle sending and displaying chat messages
document.getElementById("send-button").addEventListener("click", sendMessage);
document
  .getElementById("voice-notes-button")
  .addEventListener("click", addVoiceNote);

function sendMessage() {
  let messageInput = document.getElementById("message-input");
  let message = messageInput.value;
  displayMessage(message, "You");
  messageInput.value = "";
}

function displayMessage(message, sender) {
  let chatMessages = document.getElementById("chat-messages");
  let messageDiv = document.createElement("div");
  messageDiv.className = "message1";

  let senderP = document.createElement("p");
  senderP.className = "sender";
  senderP.innerText = sender;
  messageDiv.appendChild(senderP);

  let contentP = document.createElement("p");
  contentP.className = "content";
  contentP.innerText = message;
  messageDiv.appendChild(contentP);

  if (sender === "You") {
    messageDiv.classList.add("sent");
  }

  chatMessages.appendChild(messageDiv);
}

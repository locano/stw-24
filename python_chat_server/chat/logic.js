// Create a list container outside of the fetchMessages function
const list = document.createElement('ul')
document.body.appendChild(list)

// Create a text area for input
// const textArea = document.createElement('textarea')
// document.body.appendChild(textArea)
const textArea = document.getElementById('text-message');

// Create a button to send the message
// const button = document.createElement('button')
const button = document.getElementById('send-message');
// button.textContent = 'Send Message'
// document.body.appendChild(button)

// Define the async function to fetch messages

const server_url = 'http://0.0.0.0:3000'

async function fetchMessages() {
    // Clear the list before adding new messages
    list.innerHTML = ''

    // Use fetch to get the messages from the server
    const response = await fetch(server_url + "/messages")
    // Assuming the response is in JSON format
    const messages = await response.json()
    console.log("messages", messages);

    crearListoDeChats(messages)
    // // Loop through the messages and add them to the list
    // messages.forEach(message => {
    //     // Create a new list item for each message
    //     const item = document.createElement('li')
    //     item.textContent = message // Assuming each message is just text
    //     list.appendChild(item) // Add the item to the list
    // })
    
}

// Define the async function to post a message
async function postMessage() {
    const username = "ludwing" // Hardcoded username
    const message = textArea.value // Get the message from the text area

    // Use fetch to post the message to the server
    await fetch(server_url + '/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, message }), // Send the username and message as JSON
    })

    // Clear the text area after sending the message
    textArea.value = ''
    // Fetch messages to update the list with the newly posted message
    fetchMessages()
}

// Add an event listener to the button to call postMessage when clicked
button.addEventListener('click', postMessage)

// Call fetchMessages to load messages initially and then every 5 seconds
fetchMessages()
// setInterval(fetchMessages, 5000)
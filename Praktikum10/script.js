
function chats() {
    let message_body = document.getElementById("chat-inp").value
    document.getElementById('message-body').innerHTML += message_body+"<br>"
    document.getElementById("chat-inp").value = ''
}
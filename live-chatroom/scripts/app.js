//queries
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chatrooms');


//add new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err));
})

//check local storage for new name
const username = localStorage.username ? localStorage.username : "anonymus";

newNameForm.addEventListener('submit' , e => {
    e.preventDefault();
    //update name in clasa chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    // resetare form
    newNameForm.reset();
    updateMsg.innerHTML = `Your name was updated to ${newName}`;
    setTimeout(() => {
        updateMsg.innerHTML = '';
    }, 1000);

})

rooms.addEventListener('click', e => {
    console.log(e);
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
})

//class instances
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username);
console.log(chatroom);

//get chats and render
chatroom.getChats(data => chatUI.render(data));
"use strict";
const users = [];

function userJoin(id, username, room) {
    const user = { id, username, room };

    users.push(user);

    return user;
}

function getCurrentUser(id) {
    return users.find(user => user.id === id);
}

function userLeave(id) {
    const index = users.findIndex(user => user.id === id);

    if(index !== -1){
        return users.splice(index, 1)[0];
    }
}

function getRoomUsers(room){
    return users.filter(user => user.room === room);
}





const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");


const parsedSearch =
  location.search.substring(0, 1) === "?"
    ? location.search.substring(1, location.search.length)
    : location.search;
const { username } = Qs.parse(parsedSearch);


const room = 1;

//console.log(username, room);


const socket = io();

socket.emit("joinRoom", { username, room });

socket.on("roomUsers", ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  chatForm.classList.remove("hidden");
  chatForm.classList.add("flex");

  const msg = e.target.elements.msg.value;
  socket.emit("chatMessage", msg);

  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
});

function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta m-5">${message.username}</p>
    <p class="text max-w-sm py-2 px-3 bg-pink-500 rounded-lg text-white m-5">
        ${message.text}
    </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}

function outputRoomName(room) {
  roomName.innerText = room;
}

function outputUsers(users) {
  userList.innerHTML = `
        ${users.map((user) => `<li>${user.username}</li>`).join("")}
    `;
}


export default {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
};
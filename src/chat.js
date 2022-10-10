"use strict";

const socket = io("http://localhost:3000");

const userJoin = document.getElementById("userForm");
const username = document.getElementById("username");
const form = document.getElementById("chatForm");
const input = document.getElementById("message");
const messages = document.getElementById("allMessages");
form.style.visibility = "hidden";

let user;
let userNames = [];

userJoin.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value) {
    user = username.value;
    socket.emit("join", user);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    const pack = { message: user + ": " + input.value };
    socket.emit("message", pack);
    input.value = "";
    input.focus();
  }
});

socket.on("message", (msg) => {
  const item = document.createElement("li");
  item.textContent = msg;
  item.classList.add("messageStyle");
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
});

socket.on("new user", (msg) => {
  console.log(msg, " added to list");
  userNames.push(msg);
  console.log("List of users: ", userNames);
});

socket.on("open chat", (msg) => {
  openChat();
});

socket.on("name exists", (msg) => {
  console.log(msg, " name already exists");
  document.getElementById("nameError").innerText = "Chattinimi on jo käytössä";
  form.style.visibility = "hidden";
  document.getElementById("join").disabled = false;
});

const openChat = () => {
  document.getElementById("join").disabled = true;
  userJoin.style.display = "none";
  form.style.visibility = "visible";
  document.getElementById("nameError").innerText = "";
  document.getElementById("allMessages").style.height = "25rem";
  document.getElementById("allMessages").style.paddingTop = "0";
};

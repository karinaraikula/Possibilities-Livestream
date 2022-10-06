"use strict";

const socket = io("http://localhost:3000");

const userJoin = document.getElementById("userForm");
const username = document.getElementById("username");
const form = document.getElementById("chatForm");
const input = document.getElementById("message");
const messages = document.getElementById("allMessages");

let user;
let userNames = [];

userJoin.addEventListener("submit", (e) => {
  e.preventDefault();
  if (username.value) {
    user = username.value;
    socket.emit("join", user);
    chatTrue();
    userJoin.classList.add("hidden");
    form.classList.remove("hidden");
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

socket.on("name exists", (msg) => {
  console.log(msg, " name already exists");
  chatFalse();
});
/*
socket.on("remove from usernames", (name) => {
  userNames = userNames.filter((item) => item !== `${name}`);
  console.log("user list: ", userNames);
});
*/
function chatTrue() {
  document.getElementById("join").disabled = true;
  document.getElementById("send").disabled = false;
  document.getElementById("nameError").innerText = "";
}
function chatFalse() {
  document.getElementById("join").disabled = false;
  document.getElementById("send").disabled = true;
  document.getElementById("nameError").innerText = "Chattinimi on jo käytössä";
}

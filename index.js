"use strict";
const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "src")));

let users = [];

io.on("connection", (socket) => {
  socket.on("join", (username) => {
    if (users.some((item) => item.username === `${username}`)) {
      console.log(username, "name found from users");
      io.emit("name exists", username);
    } else {
      console.log(username, "is available");
      users.push({ username: username, id: socket.id });
      console.log("new users connected: ", users);
      io.emit("new user", username);
    }
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected", socket.id);
    const index = users.findIndex((user) => user.id === socket.id);
    if (index !== -1) {
      return users.splice(index, 1)[0];
    }
  });

  socket.on("message", ({ message }) => {
    console.log({ message });
    io.emit("message", message);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

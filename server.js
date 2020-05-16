// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
// templates engines set up
app.set("view engine", "pug");

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.render("index");
});

// Get all todos
app.get("/todos", (req, res) => {
  const todos = [
    {
      id: 1,
      content: "Đi chợ"
    },
    {
      id: 2,
      content: "Nấu cơm"
    },
    {
      id: 3,
      content: "Rửa bát"
    },
    {
      id: 4,
      content: "Học code tại CodersX"
    }
  ];
  if (req.query.q) {
    let search = req.query.q.toLowerCase();
    let filterTodos = todos.filter(v => v.content.toLowerCase().indexOf(search) !== -1);

    res.render("todos/index", {
      todos: filterTodos
    });
  } else {
    res.render("todos/index", {
      todos: todos
    });
  }
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});

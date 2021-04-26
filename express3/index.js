const express = require("express");
const books = require("./books");
var cors = require('cors');

const PORT = 5000;

const app = express();

app.use(express.json());

const log = (req, res, next) => {
  console.log(`${req.path} - ${req.method}`);
  res.locals.user = { username: "RaV" };
  next();
};

app.use(cors());
app.use(log);

app.get("/books", (req, res) => {
  console.log(res.locals.user);
  res.json(books.getBooks());
});

app.post("/books", (req, res) => {
  books.addBook(req.body);
  res.json({ msg: "created" });
});

app.put("/books/:id", (req, res) => {
  const id = req.params.id;
  try {
    books.updateBook(id, req.body);
    res.json({ msg: "updated" });
  } catch {
    res.status(400).json({ msg: "Wrong id!" });
  }
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  books.deleteBook(id);
  res.json({ msg: "deleted" });
});

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));

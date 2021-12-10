const express = require("express");
const pool = require("./database");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.listen(3000);

app.get("/", async (req, res) => {
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query("SELECT * FROM posts");
    res.render("posts", { posts: posts.rows });
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/posts", async (req, res) => {
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query("SELECT * FROM posts");
    res.render("posts", { posts: posts.rows });
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/contacts", async (req, res) => {
  try {
    res.render("contacts");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/newpost", async (req, res) => {
  try {
    res.render("create");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    console.log("get a post request has arrived");
    const { id } = req.params;
    const posts = await pool.query("SELECT * FROM posts WHERE id =$1", [id]);
    if (posts.rows.length == 0) {
      res.status(404).send("Not found");
    }
    res.render("singlepost", { post: posts.rows[0] });
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/posts/", async (req, res) => {
  try {
    console.log("a post request has arrived");
    const post = req.body;
    const newpost = await pool.query(
      "INSERT INTO posts(title, message, image_url, likes, timestamp, profile_picture)\
            values ($1, $2, $3, $4, $5, $6) RETURNING*",
      [
        post.title,
        post.message,
        post.image_url,
        0,
        new Date(),
        "https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png",
      ]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    console.log("delete a post request has arrived");
    const deletepost = await pool.query("DELETE FROM posts WHERE id = $1", [
      id,
    ]);
    res.json(post);
  } catch (err) {
    console.error(err.message);
  }
});
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    const nrOfLikes = await pool.query(
      "Select likes from posts where id = $1",
      [id]
    );
    const newLikeNr = nrOfLikes.rows[0].likes + 1;
    const updatepost = await pool.query(
      "UPDATE posts SET likes = '" + newLikeNr + "'  WHERE id = $1",
      [id]
    );
    res.json(post);
  } catch (err) {
    console.error(err.message);
  }
});
app.use(express.static("assets"));
app.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.error(err.message);
  }
});
